import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as API from './utils/api'

export default class App extends React.Component {
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

    API.getDeck('udacity').then(data => console.log(data))

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
