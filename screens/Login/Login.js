import React, { Component }from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      twofactor: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Login'
  })

  clickButton = () => {
    this.props.onPress(this.state)
    const { navigate } = this.props.navigation;
    navigate('Profile')
  }

  render () {
    return (
    <View style={{alignItems: 'center'}}>
        <Image source={require('../..//GitHub_Logo.png')} style={{width: 250, height: 110}}/>
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          placeholder='password'
          onChangeText={(password) => this.setState({password})}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TextInput
          style={{ width: 193, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          placeholder='2FA Code'
          onChangeText={(twofactor) => this.setState({twofactor})}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Button
          onPress={this.clickButton}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
    )
  }
}

export default LoginScreen
