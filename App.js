import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import * as API from './utils/api'
import { setLocalNotification } from './utils/helpers'
import reducer from './reducers/rootReducer'
import DeckListView from './components/DeckListView'
import DeckDetailView from './components/DeckDetailView'
import DeckNewView from './components/DeckNewView'
import AddCardToDeck from './components/AddCardToDeck'
import QuizView from './components/QuizView'

function UdaciStatusBar (){
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent/>
    </View>
  )
}

const Tabs = TabNavigator({
  ListView: {
    screen: DeckListView,
    navigationOptions: {
      title: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home-outline" size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: DeckNewView,
    navigationOptions: {
      title: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add-outline" size={30} color={tintColor} />
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'UdaciCards'
    }
  },
  DetailView: {
    screen: DeckDetailView
  },
  AddCard: {
    screen: AddCardToDeck,
    navigationOptions: {
      title: 'Add Card'
    }
  },
  QuizView: {
    screen: QuizView
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar />
          <MainNavigator />
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
