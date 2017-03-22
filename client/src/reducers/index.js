import * as actions from '../actions/index';

const initialState = {
  cards: [],
  userCards: [],
  error: null
}

export default (state=initialState, action) => {
    if (action.type === actions.FETCH_CARDS_SUCCESS) {
        return {...state, cards: action.cards,
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

  return state;
};
