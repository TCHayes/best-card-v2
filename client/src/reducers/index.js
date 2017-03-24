import * as actions from '../actions/index';
import update from 'immutability-helper';

const initialState = {
  cards: [],
  username: '',
  userCards: [],
  error: null
}

export default (state=initialState, action) => {
    if (action.type === actions.FETCH_CARDS_SUCCESS) {
      const togglableCards = action.cards.map((card) => ({...card, toggled: false}));
        return {...state, cards: togglableCards,
            error: null};
    }
    if (action.type === actions.FETCH_CARDS_FAILURE) {
        return {...state, error: action.error};
    }
    if (action.type === actions.FETCH_USER_SUCCESS) {
        return {...state, userCards: action.cards,
            error: null};
    }
    if (action.type === actions.FETCH_USER_FAILURE) {
        return {...state, error: action.error};
    }
    if (action.type === actions.TOGGLE_CARD) {
      return update(state, {
            cards: {
              [action.target]: {
                toggled: {$set: true}
              }
            }
      });
    }
  return state;
};
