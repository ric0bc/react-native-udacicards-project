import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import * as API from './utils/api'
import reducer from './reducers/rootReducer'

export default class App extends React.Component {
  state = {
    decks: {}
  }
  componentDidMount () {
    // API.saveDeckTitle({ title: 'udacity' })
    //   .then( () => API.getDecks())

    // API.addCardToDeck({
    //   title: 'udacity',
    //   card: {
    //     question: 'Test question2',
    //     answer: 'test answer2'
    //   }
    // })

    API.getDecks().then(data => this.setState({decks: data}))

  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
