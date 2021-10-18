const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isAuth: true,
        error: null
      }
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isAuth: false,
        error: true
      }
    case 'LOGOUT':
      return {
        user: null,
        isAuth: false,
        error: false
      }
    default:
      return state
  }
}

export default Reducer
