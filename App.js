import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationActions, StackNavigator, TabNavigator } from 'react-navigation'
import base64 from 'base-64'
import Profile from './screens/Profile/Profile'
import Organisations from './screens/Organisations/Organisations'
import Repositories from './screens/Repositories/Repositories'
import Login from './screens/Login/Login'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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

const SimpleApp = StackNavigator({
  Login: { screen: UnsecuredScreens },
  Profile: { screen: SecuredScreens }
}, {
  headerMode: 'none'
})

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
