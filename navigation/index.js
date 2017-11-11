import { StackNavigator, TabNavigator } from 'react-navigation'

import Profile from '../screens/Profile/ProfileWrapper'
import Organisations from '../screens/Organisations/OrganisationsWrapper'
import Repositories from '../screens/Repositories/RepositoriesWrapper'
import Login from '../screens/Login/LoginWrapper'

const TabbedScreens = TabNavigator({
  Profile: { screen: Profile },
  Organisations: { screen: Organisations },
  Repositories: { screen: Repositories }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 14
    }
  }
})

const SecuredScreens = StackNavigator({
  TabbedScreens: {
    screen: TabbedScreens
  }
})

const UnsecuredScreens = StackNavigator({
  Login: { screen: Login }
})

const GithubBrowserApp = StackNavigator({
  Login: { screen: UnsecuredScreens },
  Profile: { screen: SecuredScreens }
}, {
  headerMode: 'none'
})

export default GithubBrowserApp
