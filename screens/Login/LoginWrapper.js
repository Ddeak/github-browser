import { connect } from 'react-redux'
import { doLogin } from '../../actions/user'
import LoginScreen from './Login.js'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPress: user => {
      dispatch(doLogin(user))
    }
  }
}

const LoginWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)

export default LoginWrapper
