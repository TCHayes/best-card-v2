import * as actions from '../actions/index';
import update from 'immutability-helper';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

const initialState = {
  cards: [],
  username: '',
  userCards: [],
  error: null
}

export default (state=initialState, action) => {
  if (action.type === actions.LOGOUT) {
    cookie.remove('token');
    cookie.remove('headers');
    browserHistory.replace('/welcome');
    return {...state, cards: [], username: '', userCards: [], error: null};
  }
  if (action.type === actions.FETCH_CARDS_SUCCESS) {
    const togglableCards = action.cards.map((card) => ({...card, toggled: false}));
    return {...state, cards: togglableCards, error: null};
  }
  if (action.type === actions.FETCH_CARDS_FAILURE) {
    return {...state, error: action.error};
  }
  if (action.type === actions.FETCH_FAILURE) {//TODO Redundant with above Fetch Failure
    return {...state, error: action.error};
  }
  if (action.type === actions.FETCH_USER_SUCCESS) {
    return {...state, userCards: action.cards, error: null};
  }
  if (action.type === actions.FETCH_USER_FAILURE) {
    cookie.remove('token');
    cookie.remove('headers');
    browserHistory.replace('/welcome');
    return {...state, cards: [], username: '', userCards: [], error: action.error};
  }
  if (action.type === actions.SET_USERNAME) {
    return {...state, username: action.username}
  }
  if (action.type === actions.TOGGLE_CARD) {
    return update(state, {
      cards: {
        [action.target]: {
          toggled: {$set: !state.cards[action.target].toggled}
        }
      }
    });
  }
  if (action.type === actions.ADD_USER_CARDS_SUCCESS) {
    console.log("Hello from ADD_USER_CARDS_SUCCESS reducer");
    return state;
  }
  if (action.type === actions.PASS_RESET_REQ_SUCCESS) {
    console.log("Hello from PASS_RESET_REQ_SUCCESS reducer");
    return state;
  }
  if (action.type === actions.RESET_PASS_SUCCESS) {
    console.log("Hello from RESET_PASS_SUCCESS reducer");
    return state;
  }
  return state;
};
