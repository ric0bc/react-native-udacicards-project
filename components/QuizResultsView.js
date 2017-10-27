import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

import { gStyles } from '../utils/globalStyles'

export default class QuizResultsView extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  backToDeck = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { correctAnswers, incorrectAnswers, questionsLength } = this.props

    return (
      <View style={gStyles.container}>
        <Text style={styles.text}>
          Correct Answers: {Math.round(correctAnswers * 100 / questionsLength)}%
        </Text>
        <Text style={styles.text}>
          Incorrect Answers: {Math.round(incorrectAnswers * 100 / questionsLength)}%
        </Text>
        <TouchableOpacity
          style={gStyles.btnPrimary}
          onPress={this.props.restartQuiz}>
          <Text style={styles.btnFontColor}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={gStyles.btnPrimary}
          onPress={this.backToDeck}>
          <Text style={styles.btnFontColor}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32
  },
  btnFontColor: {
    color: '#fff'
  }
})
