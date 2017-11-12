import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Repositories`,
  });

  _keyExtractor = (item, index) => item.id

  render () {
    const { repositories } = this.props

    let layout = null

    if (repositories.length === 0) {
      layout = 
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text>You do not have any repositories</Text>
        </View>
    } else {
      layout = 
        <FlatList
          data={repositories}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => 
            <View style={{ borderBottomWidth:1, borderBottomColor: '#000' }}>
              <View
                style={{ marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10 }}
              >
                <Text>{item.name}</Text>
                <Text>{item.created_at}</Text>
                <Text>{item.language}</Text>
              </View>
            </View>
          }
        />
    }


    return (
      <View>
        { layout }
      </View>
    )
  }
}
