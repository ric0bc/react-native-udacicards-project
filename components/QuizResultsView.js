import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { gStyles } from '../utils/globalStyles'

const QuizResultsView = (props) => (
  <View style={gStyles.container}>
    <Text style={styles.text}>Correct Answers: {Math.round(props.correctAnswers * 100 / props.questionsLength)}%</Text>
    <Text style={styles.text}>Incorrect Answers: {Math.round(props.incorrectAnswers * 100 / props.questionsLength)}%</Text>
  </View>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 32
  }
})

export default QuizResultsView
