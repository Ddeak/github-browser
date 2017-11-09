import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    title: `Profile`,
  });

  render () {
    const { profile } = this.props
    let text = null;
    if (profile) {
      text = 
        <View>
          <Image source={{uri: profile.avatar_url}} style={{ width: 50, height: 50 }} />
          <Text>{profile.name}</Text>
          <Text>{profile.bio}</Text>
        </View>
    } else {
      text = <Text>Awaiting profile</Text>
    }
    return (
      <View>
        {text}
      </View>
    )
  }
}
