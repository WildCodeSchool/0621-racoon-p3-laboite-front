import { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import axios from 'axios'

import { Context } from '../context/Context'

export const PrivateRoute = ({ children, ...rest }) => {
  const { dispatch } = useContext(Context)
  const userStorage = localStorage.getItem('user')

  // Defini le Bearer JWT dans header pour les requetes de la page.
  axios.defaults.headers.common['Authorization'] = `Bearer ${userStorage}`

  const testAuth = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_URL_API}/login/isUserAuth`)
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' })
      localStorage.removeItem('user')
    }
  }
  testAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userStorage ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
