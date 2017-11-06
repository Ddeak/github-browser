import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    title: `Profile`,
  });

  render () {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Hello from the profile</Text>
        <Text>{params.token}</Text>
      </View>
    )
  }
}
