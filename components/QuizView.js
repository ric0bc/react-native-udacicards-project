import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class QuizView extends Component {
  state = {
    showAnswer: false
  }
  render() {
    const { item } = this.props.navigation.state.params

    let index = 0

    return (
      <View style={styles.container}>
        {this.state.showAnswer
          ? <Text>{item.questions[index].answer}</Text>
          : <Text>{item.questions[index].question}</Text>
        }
        <TouchableOpacity
          onPress={() => this.setState((state) => {
            showAnswer: !state.showAnswer
          })
        }>
          <Text>Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Incorrect</Text>
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
  }
})

export default QuizView
