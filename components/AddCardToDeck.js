import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions/action'

class AddCardToDeck extends Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { item } = this.props.navigation.state.params

    const card = {
      question: this.state.question,
      answer: this.state.answer
    }

    addCardToDeck({
      title: item.title,
      card: card
    }).then(() => this.setState({question: '', answer: ''}))

    // Save in redux
    this.props.addCard(item.title, card)


    // navigate back
    this.props.navigation.dispatch(NavigationActions.back())

  }

  render() {

    return (
      <View>
        <Text>Question:</Text>
        <TextInput
          onChangeText={(text) => this.setState({question: text})}
          value={this.state.question}
        />
        <Text>Answer:</Text>
        <TextInput
          onChangeText={(text) => this.setState({answer: text})}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={this.submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {addCard})(AddCardToDeck)
