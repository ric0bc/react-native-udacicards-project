import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'

import * as API from '../utils/api'
import { gStyles } from '../utils/globalStyles'
import { addDeck } from '../actions/action'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

class DeckNewView extends Component {
  state = {
    text: ''
  }

  submit = () => {
    const { text } = this.state

    const item = {
      [text]: {
        title: text,
        questions: []
      }
    }

    API.saveDeckTitle({ title: text })
      .then(() => this.props.addDeck(item))
      .then(() => this.setState({text: ''}))

    clearLocalNotification()
      .then(setLocalNotification)

    // this.props.navigation.dispatch(NavigationActions.back({key: 'NewDeck'}))
    this.props.navigation.navigate('DetailView', {item})
  }

  render() {
    return (
      <KeyboardAvoidingView style={gStyles.container} behavior="padding">
        <View style={styles.subContainer}>
          <Text style={styles.text}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity
            style={gStyles.btnPrimary}
            onPress={this.submit}>
            <Text style={{color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'stretch'
  }
})

export default connect(null, {addDeck})(DeckNewView)
