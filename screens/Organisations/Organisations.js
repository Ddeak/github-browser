import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

export default class Organisations extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Organisations`,
  });

  render () {
    const { organisations } = this.props

    let layout = null

    if (organisations.length === 0) {
      layout = 
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text>You do not belong to any organisations.</Text>
        </View>
    } else {
      layout = 
        <FlatList
          data={organisations}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => 
              <View
                style={{ marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#000' }}
              >
                <Text>{item.login}</Text>
                <Text>{item.description}</Text>
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
