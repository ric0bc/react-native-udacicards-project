import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { gStyles } from '../utils/globalStyles'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions/action'

class AddCardToDeck extends Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { deck } = this.props.navigation.state.params

    const card = {
      question: this.state.question,
      answer: this.state.answer
    }

    // save in AsyncStorage
    addCardToDeck({
      title: deck.title,
      card: card
    }).then(() => this.setState({question: '', answer: ''}))

    // Save in redux
    this.props.addCard(deck.title, card)


    // navigate back
    this.props.navigation.dispatch(NavigationActions.back())

  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Question:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({question: text})}
          value={this.state.question}
        />
        <Text>Answer:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({answer: text})}
          value={this.state.answer}
        />
        <TouchableOpacity
          style={gStyles.btnPrimary}
          onPress={this.submit}>
          <Text style={{color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    width: 300,
    borderRadius: 4,
    padding: 10
  },
  primaryButton: {
    marginTop: 40,
    width: 200,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#000',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => state

export default connect(mapStateToProps, {addCard})(AddCardToDeck)
