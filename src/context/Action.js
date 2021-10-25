// Action crée pour le reducer mais non utilisé car le dispatch appel directement le reducer. A modifier si besoin.

export const loginSuccess = access_token => ({
  type: 'LOGIN_SUCCESS',
  payload: access_token
})

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE'
})

export const Logout = () => ({
  type: 'LOGOUT'
})
