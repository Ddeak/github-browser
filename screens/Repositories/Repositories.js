import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Repositories`,
  });

  _keyExtractor = (item, index) => item.id

  render () {
    console.log(this.props)
    const { repositories } = this.props
    let layout = null

    if (repositories.length === 0) {
      layout = <Text>You do not have any repositories</Text>
    } else {
      layout = 
        <FlatList
          data={repositories}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
    }


    return (
      <View>
        { layout }
      </View>
    )
  }
}
