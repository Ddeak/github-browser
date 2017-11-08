import { StackNavigator, TabNavigator } from 'react-navigation'

import Profile from '../screens/Profile/Profile'
import Organisations from '../screens/Organisations/Organisations'
import Repositories from '../screens/Repositories/Repositories'
import Login from '../screens/Login/LoginWrapper'

const TabbedScreens = TabNavigator({
  Profile: { screen: Profile },
  Organisations: { screen: Organisations },
  Repositories: { screen: Repositories }
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
