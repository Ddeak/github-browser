import { connect } from 'react-redux'
import { getRepositories } from '../../actions/user'
import RepositoriesScreen from './Repositories'

const mapStateToProps = (state) => {
  return {
    repositories: state.user.repositories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRepositories: token => {
      dispatch(getRepositories(token))
    }
  }
}

const RepositoriesWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoriesScreen)

export default RepositoriesWrapper
