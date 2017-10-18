import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { TabNavigator } from 'react-navigation'

import * as API from './utils/api'
import reducer from './reducers/rootReducer'
import DeckListView from './components/DeckListView'

function UdaciStatusBar (){
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent/>
    </View>
  )
}

const Tabs = TabNavigator({
  ListView: {
    screen: DeckListView
  }
})

export default class App extends React.Component {
  state = {
    decks: {}
  }
  componentDidMount () {
    // API.saveDeckTitle({ title: 'redux' })
    //   .then( () => API.getDecks())

    // API.addCardToDeck({
    //   title: 'udacity',
    //   card: {
    //     question: 'Test question2',
    //     answer: 'test answer2'
    //   }
    // })



  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar />
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const store = createStore(reducer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
