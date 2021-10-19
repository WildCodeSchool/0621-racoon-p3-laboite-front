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
