import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { gStyles } from '../utils/globalStyles'

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
          <View style={styles.textCount}>
            <Text>
              {deck.questions.indexOf(deck.questions[index]) + 1}/{deck.questions.length}
            </Text>
          </View>
          {this.state.showAnswer
            ? <Text style={styles.textQA}>{deck.questions[index].answer}</Text>
            : <Text style={styles.textQA}>{deck.questions[index].question}</Text>
          }
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => this.setState((state) => ({
              showAnswer: !state.showAnswer
            }))
          }>
            <Text style={styles.btnSecondaryText}>{this.state.showAnswer ? 'Question' : 'Answer'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[gStyles.btnPrimary, styles.btnCorrectColor]}
            onPress={this.onHandleCorrect}>
            <Text style={styles.btnTextColor}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[gStyles.btnPrimary, styles.btnIncorrectColor]}
            onPress={this.onHandleIncorrect}>
            <Text style={styles.btnTextColor}>Incorrect</Text>
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
    alignItems: 'center',
    position: 'relative'
  },
  btnTextColor: {
    color: '#fff'
  },
  btnCorrectColor: {
    backgroundColor: 'green',
    borderWidth: 0
  },
  btnIncorrectColor: {
    backgroundColor: 'red',
    borderWidth: 0,
    marginTop: 10
  },
  textCount: {
    position: 'absolute',
    top: 5,
    left: 5
  },
  textQA: {
    fontSize: 38
  },
  btnSecondary: {
    marginTop: 15,
  },
  btnSecondaryText: {
    fontWeight: 'bold',
    color: 'red'
  }
})


export default QuizView
