import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import base64 from 'base-64'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      username: 'Username',
      password: 'Password',
      twofactor: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Login`,
  });

  onPressLogin = () => {
    const config = {
      GITHUB_CLIENT_ID: '653bf90a3e55b6d2c1ef',
      GITHUB_CLIENT_SECRET: 'ae5bd8259c3314d6d0963517d41b306aa7eba293',
      AUTH_URL: 'https://api.github.com/authorizations'
    };

    const bytes = this.state.username.trim() + ':' + this.state.password.trim();
    const encoded = base64.encode(bytes);

    return fetch(config.AUTH_URL, {
      method: 'POST',
      headers: {
        'Authorization' : 'Basic ' + encoded,
        'User-Agent': 'GitHub Issue Browser',
        'Content-Type': 'application/json; charset=utf-8',
        'X-GitHub-OTP': `${this.state.twofactor}`
      },
      body: JSON.stringify({
        'client_id': config.GITHUB_CLIENT_ID,
        'client_secret': config.GITHUB_CLIENT_SECRET,
        'scopes': ['user', 'repo'],
        'note': 'not abuse'
      })
    })
    .then((response) => {
      const isValid = response.status < 400;
      return response.json()
        .then((json) => {
          if (isValid) {
            const { navigate } = this.props.navigation;
            navigate('Profile', { token: json.token })
          } else {
            throw new Error(json.message);
          }
        });
      });
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={require('../..//GitHub_Logo.png')} style={{width: 250, height: 110}}/>
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(twofactor) => this.setState({twofactor})}
          value={this.state.twofactor}
        />
        <Button
          onPress={this.onPressLogin}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
    );
  }
}

