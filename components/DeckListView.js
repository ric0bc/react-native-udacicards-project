import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
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

  render() {
    if(this.state.ready) {
      console.log(Object.values(this.props.decks));
      return (
        <FlatList
          data={Object.values(this.props.decks)}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={this._keyExtractor}
        />
      )
    } else {
      return <AppLoading />
    }
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {getDecks})(DeckListView)
