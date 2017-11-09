import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import base64 from 'base-64'

export default class Organisations extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Organisations`,
  });

  render () {
    const { organisations } = this.props
    let layout = null
    if (organisations.length === 0) {
      layout = <Text>You do not have any organisations.</Text>
    } else {
        <View>
          <ListView
            dataSource={this.props.organisations}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
    }
    return (
      <View>
        { layout }
      </View>
    )
  }
}
