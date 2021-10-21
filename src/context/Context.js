import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer'

const INITIAL_STATE = {
  access_token: JSON.parse(localStorage.getItem('access_token')) || null,
  error: null
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('access_token', JSON.stringify(state.access_token))
  }, [state.access_token])

  return (
    <Context.Provider
      value={{
        access_token: state.access_token,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  )
}
