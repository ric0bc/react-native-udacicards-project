import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

import { gStyles } from '../utils/globalStyles'

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
        <Text style={styles.title}>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <TouchableOpacity
          style={[gStyles.btnPrimary, styles.btnWhite]}
          onPress={() => this.props.navigation.navigate('AddCard', {deck})}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={deck.questions.length > 0 ? false : true}
          style={gStyles.btnPrimary}
          onPress={() => this.props.navigation.navigate('QuizView', {deck})}>
          <Text style={{color: '#fff'}}>Start Quiz</Text>
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
  btnWhite: {
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(DeckDetailView)
