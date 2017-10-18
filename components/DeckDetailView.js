import React, { Component } from 'react'
import { View } from 'react-native'

class DeckDetailView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.title
    }
  }
  render(){
    return (
      <View>

      </View>
    )
  }
}

export default DeckDetailView
