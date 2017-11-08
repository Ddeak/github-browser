import { LOGIN } from '../actions/login'

const initialState = {
  loggedIn: false,
  token: ''
}

export default function login (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        loggedIn: true
      })
    default:
      return state
  }
}
