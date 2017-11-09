import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions, StackNavigator, TabNavigator } from 'react-navigation'
import base64 from 'base-64'

export default class Organisations extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Organisations`,
  });

  componentWillMount() {
    console.log(this.props)
    console.log('In will mount')
    this.props.getOrganisations(this.props.token)
  }

  render () {
    return (
      <View>
        <Text>Hello from the Organisations</Text>
      </View>
    )
  }
}
