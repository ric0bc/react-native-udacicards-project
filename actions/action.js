export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function getDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
