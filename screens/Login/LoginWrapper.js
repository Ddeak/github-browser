import { connect } from 'react-redux'
import { login } from '../../actions/login'
import LoginScreen from './Login.js'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPress: user => {
      dispatch(login(user))
    }
  }
}

const LoginWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)

export default LoginWrapper
