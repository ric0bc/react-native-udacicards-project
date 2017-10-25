import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class QuizView extends Component {
  state = {
    showAnswer: false,
    index: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
  }

  incrementIndex = () => {
    this.setState((state) => ({
      index: state.index += 1
    }))
  }

  onHandleCorrect = () => {
    this.incrementIndex()
    this.setState((state) => ({
      correctAnswers: state.correctAnswers += 1
    }))
  }

  onHandleIncorrect = () => {
    this.incrementIndex()
    this.setState((state) => ({
      incorrectAnswers: state.incorrectAnswers += 1
    }))
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { index, incorrectAnswers, correctAnswers } = this.state

    if(index <= deck.questions.length - 1){
      return (
        <View style={styles.container}>
          <Text>
            {deck.questions.indexOf(deck.questions[index]) + 1}/{deck.questions.length}
          </Text>
          {this.state.showAnswer
            ? <Text>{deck.questions[index].answer}</Text>
            : <Text>{deck.questions[index].question}</Text>
          }
          <TouchableOpacity
            onPress={() => this.setState((state) => ({
              showAnswer: !state.showAnswer
            }))
          }>
            <Text>Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onHandleCorrect}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onHandleIncorrect}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
        return (
          <View>
            <Text>Correct Answers: {Math.round(correctAnswers * 100 / deck.questions.length)}%</Text>
            <Text>Incorrect Answers: {Math.round(incorrectAnswers * 100 / deck.questions.length)}%</Text>
          </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default QuizView
