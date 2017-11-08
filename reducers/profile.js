export default function getProfile (state = {}, action) {
  switch (action.type) {
    case 'GET_PROFILE':
      return Object.assign({}, state)
    default:
      return state
  }
}
