import { connect } from 'react-redux'
import { getProfile } from '../../actions/user'
import ProfileScreen from './Profile'

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    profile: state.user.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: token => {
      dispatch(getProfile(token))
    }
  }
}

const ProfileWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)

export default ProfileWrapper
