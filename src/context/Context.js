import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuth: false,
  error: null
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

  return (
    <Context.Provider
      value={{
        user: state.user,
        isAuth: state.isAuth,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  )
}
