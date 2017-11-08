import React, { Component }from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'username',
      password: 'password',
      twofactor: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Login'
  })

  render () {
    return (
    <View style={{alignItems: 'center'}}>
        <Image source={require('../..//GitHub_Logo.png')} style={{width: 250, height: 110}}/>
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1}}
          defaultValue={this.state.username}
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1}}
          defaultValue={this.state.password}
          onChangeText={(password) => this.setState({password})}
        />
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1}}
          defaultValue={this.state.twofactor}
          onChangeText={(twofactor) => this.setState({twofactor})}
        />
        <Button
          onPress={() => this.props.onPress(this.state)}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
    )
  }
}

export default LoginScreen
