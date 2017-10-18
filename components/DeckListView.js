import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'

import * as API from '../utils/api'
import { getDecks } from '../actions/action'

class DeckListView extends Component {
  state = {
    ready: false
  }

  componentDidMount () {
    API.getDecks()
      .then(data => this.props.getDecks(data))
      .then(() => this.setState({ready: true}))
  }
  _keyExtractor = (item, index) => index;

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('DetailView', {item})}>
        <View style={styles.viewItem}>
          <Text style={styles.textItem}>{item.title}</Text>
          <Text>{item.questions.length} cards</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    if(this.state.ready) {
      return (
        <View style={{flex: 1}}>
        <FlatList
          data={Object.values(this.props.decks)}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
        </View>
      )
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  viewItem: {
    height: 200,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textItem: {
    fontSize: 24
  },
})

const mapStateToProps = state => state

export default connect(mapStateToProps, {getDecks})(DeckListView)
