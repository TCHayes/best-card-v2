import * as actions from '../actions/index';

const initialState = {
  cards: [],
  error: null
}

export default (state=initialState, action) => {
    if (action.type === actions.FETCH_CARDS_SUCCESS) {
        return {...state, cards: action.cards,
            error: null};
    }
    else if (action.type === actions.FETCH_CARDS_FAILURE) {
        return {...state, error: action.error};
    }
  return state;
};
