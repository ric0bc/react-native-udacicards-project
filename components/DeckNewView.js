import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

import * as API from '../utils/api'
import { addDeck } from '../actions/action'

class DeckNewView extends Component {
  state = {
    text: ''
  }

  submit = () => {
    const { text } = this.state
    
    API.saveDeckTitle({ title: text })
      .then(() => this.props.addDeck({
        [text]: {
          title: text,
          questions: []
        }
      }))
      .then(() => this.setState({text: ''}))
    this.props.navigation.dispatch(NavigationActions.back({key: 'NewDeck'}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity
          onPress={this.submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 48,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'stretch'
  }
})

export default connect(null, {addDeck})(DeckNewView)
