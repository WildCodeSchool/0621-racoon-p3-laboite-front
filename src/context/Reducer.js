const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        error: null
      }
    case 'LOGIN_FAILURE':
      return {
        user: null,
        error: true
      }
    case 'LOGOUT':
      return {
        user: null,
        error: false
      }
    default:
      return state
  }
}

export default Reducer
