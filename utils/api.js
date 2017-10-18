import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'UdaciCards:flashcards'

export function submitReactFlashCard () {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    React: {
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        }
      ]
    }
  }))
}

export function saveDeckTitle ({ title }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function getDeck ( id ) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, )
    .then( res => JSON.parse(res))
    .then( decks => decks[id])
}

export function addCardToDeck ({ title, card }) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then( res => JSON.parse(res))
    .then( data => data[title])
    .then( test => AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        questions: test.questions.concat(card)
      }
    })) )
  
}

export function deleteDeck () {
  return AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY)
}

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then( res => JSON.parse(res))
    .then( data => console.log(data))
}
