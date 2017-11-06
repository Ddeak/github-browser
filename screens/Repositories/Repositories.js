import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Repositories`,
  });

  render () {
    return (
      <View>
        <Text>Hello from the Repositories</Text>
      </View>
    )
  }
}
