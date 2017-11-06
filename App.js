import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationActions, StackNavigator, TabNavigator } from 'react-navigation'
import base64 from 'base-64'

class Login extends Component {
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
        <Image source={require('./GitHub_Logo.png')} style={{width: 250, height: 110}}/>
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

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    title: `${navigation.state.params.name} Profile`,
  });

  render () {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Hello from the profile of {params.name}</Text>
        <Text>{params.toke}</Text>
      </View>
    )
  }
}

class Organisations extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Organisations`,
  });

  render () {
    return (
      <View>
        <Text>Hello from the Organisations</Text>
      </View>
    )
  }
}

class Repositories extends Component {
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
