import { useState, useContext } from 'react'
import axios from 'axios'

import { Context } from '../../context/Context'

const Login = ({ toggleLoginForm }) => {
  // Data des inputs
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  // Actionne les fonction de Action.js => Reducer.js => Context.js
  const { dispatch } = useContext(Context)

  //----------------------------------------------------------------------------

  // LOGIN
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL_API}/login`, {
        email,
        password
      })
      console.log('res', res)
      if (res.data.auth) {
        // Set user dans userContext
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
        window.location.replace('/admin')
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' })
      alert(error)
    }
  }

  // const checkAuth = async () => {
  //   axios
  //     .get(`${process.env.REACT_APP_URL_API}/login/isUserAuth`)
  //     .then(res => {
  //       console.log('res auth:', res)
  //       if (res.data.auth) {
  //         console.log('Auth Cheked')
  //         window.location.replace('/admin')
  //       }
  //     })
  //     .catch(error => {
  //       console.log('error auth:', error.response)
  //     })
  // }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className='form-group'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input type='submit' value='Login' />
        <button
          className='form-btn'
          onClick={e => {
            e.stopPropagation()
            toggleLoginForm()
          }}
        >
          Annuler
        </button>
      </div>
    </form>
  )
}

export default Login
