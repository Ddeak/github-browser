import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Repositories`,
  });

  render () {
    console.log(this.props)
    const { repositories } = this.props
    let layout = null

    if (repositories.length === 0) {
      layout = <Text>You do not have any repositories</Text>
    } else {
      layout = 
        <ListView
          dataSource={repositories}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    }


    return (
      <View>
        { layout }
      </View>
    )
  }
}
