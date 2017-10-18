import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK
} from '../actions/action'

function decks ( state = {}, action ) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        decks: {...action.decks}
      }
    case ADD_DECK :
      return {
        ...state,
        decks: {
          ...state.decks,
          ...action.deck
        }
      }
    case ADD_CARD_TO_DECK :
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.title]: {
            ...state.decks[action.title],
            questions: state.decks[action.title].questions.concat(action.card)
          }
        }
      }
    default :
      return state
  }
}

export default decks
