import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer'

const INITIAL_STATE = {
  access_token: JSON.parse(localStorage.getItem('user')) || null,
  error: null
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

  useEffect(() => {
    if (state.access_token) {
      localStorage.setItem('access_token', JSON.stringify(state.access_token))
    }
  }, [state])

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
