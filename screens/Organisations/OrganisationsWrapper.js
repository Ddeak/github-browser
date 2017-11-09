import { connect } from 'react-redux'
import { getOrganisations } from '../../actions/user'
import OrganisationScreen from './Organisations'

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    organisations: state.user.organisations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrganisations: token => {
      dispatch(getOrganisations(token))
    }
  }
}

const OrganisationWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganisationScreen)

export default OrganisationWrapper
