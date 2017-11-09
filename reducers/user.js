import { LOGIN, LOGGED_IN, PROFILE, GOT_PROFILE } from '../actions/user'

const initialState = {
  fetching: false,
  token: '',
  profile: {},
  organisations: [],
  repositories: []
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        fetching: true
      })
    case LOGGED_IN:
      return Object.assign({}, state, {
        fetching: false,
        token: action.token
      })
    case PROFILE:
      return Object.assign({}, state, {
        fetching: true
      })
    case GOT_PROFILE:
      return Object.assign({}, state, {
        fetching: false,
        profile: action.profile
      })
    default:
      return state
  }
}
