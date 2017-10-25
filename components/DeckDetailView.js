import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

class DeckDetailView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.title
    }
  }
  render(){
    const { item } = this.props.navigation.state.params
    const { decks } = this.props

    const deck = decks[item.title]

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{decks[item.title].questions.length} cards</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('AddCard', {item})}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('QuizView', {deck})}>
          <Text>Start Quiz</Text>
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
  title: {
    fontSize: 48
  },
  addButton: {
    marginTop: 40
  }
})

const mapStateToProps = state => state

export default connect(mapStateToProps)(DeckDetailView)
