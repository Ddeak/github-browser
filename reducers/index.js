import { combineReducers } from 'redux'
import loginReducers from './login'
import profileReducers from './profile'

export default combineReducers({
  user: loginReducers,
  profile: profileReducers
})
