import cookie from 'react-cookie';

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL,
});

export const TURN_INFO_MODAL_OFF = 'TURN_INFO_MODAL_OFF';
export const turnInfoModalOff = () => ({
  type: TURN_INFO_MODAL_OFF,
});

export const TOGGLE_CARD = 'TOGGLE_CARD';
export const toggleCard = (cardIndex) => ({
  type: TOGGLE_CARD,
  target: cardIndex,
});

export const SET_SESSION_EMAIL = 'SET_SESSION_EMAIL';
export const setSessionEmail = (email) => ({
  type: SET_SESSION_EMAIL,
  email,
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  cards: user.cards,
  email: user.email,
});

export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  error,
});

export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  error,
});

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const addUserSuccess = (data) => ({
  type: ADD_USER_SUCCESS,
});

export const ADD_USER_CARDS_SUCCESS = 'ADD_USER_CARDS_SUCCESS';
export const addUserCardsSuccess = (data) => ({
  type: ADD_USER_CARDS_SUCCESS,
});

export const PASS_RESET_REQ_SUCCESS = 'PASS_RESET_REQ_SUCCESS';
export const passResetReqSuccess = (data) => ({
  type: PASS_RESET_REQ_SUCCESS,
  data,
})

export const RESET_PASS_SUCCESS = 'RESET_PASS_SUCCESS';
export const resetPassSuccess = (data) => ({
  type: RESET_PASS_SUCCESS,
  data,
})

export const resetPassword = (formData) => dispatch => {
  return fetch('/api/resetpass', {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    method: "PUT",
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    dispatch(resetPassSuccess(data));
  })
  .catch(error => {
    dispatch(fetchFailure(error));
  })
}

export const sendResetPasswordEmail = (formData) => dispatch => {
  return fetch('/api/forgotpass', {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    method: "PUT",
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    dispatch(passResetReqSuccess(data));
  })
  .catch(error => {
    dispatch(fetchFailure(error));
  })
}

export const fetchUser = () => dispatch => {
  const headers = cookie.load('headers');
  return fetch(`/api/users/?token=${cookie.load('token')}`,
              {headers: headers}).then(response => {
      if (!response.ok) {
          throw new Error(response.statusText);
      }
      return response.json();
  })
  .then(user => {
    dispatch(setSessionEmail(user.email));
    dispatch(fetchUserSuccess(user));
  })
  .catch(error => {
    dispatch(fetchUserFailure(error));
  })
}

export const addUser = (formData) => dispatch => {
  return fetch(`/api/users`,
    {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: "POST",
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      dispatch(addUserSuccess(data.cards));
    })
    .catch(error => {
      dispatch(fetchUserFailure(error));
      //MIGHT WANT TO RENAME TO JUST fetchFailure OR SOMETHING SIMILAR
    })
}

export const addUserCards = (formData) => dispatch => {
  return fetch(`/api/users`,
    {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: "PUT",
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      dispatch(addUserCardsSuccess(data.cards));
    })
    .catch(error => {
      dispatch(fetchUserFailure(error));
      //MIGHT WANT TO RENAME TO JUST fetchFailure OR SOMETHING SIMILAR
    })
}



//----------------------Cards Actions below----------------------------------->

export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const fetchCardsSuccess = (data) => ({
  type: FETCH_CARDS_SUCCESS,
  cards: data
});

export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const fetchCardsFailure = (error) => ({
  type: FETCH_CARDS_FAILURE,
  error
});

export const fetchCards = () => dispatch => {
  return fetch('/api/cards').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    dispatch(fetchCardsSuccess(data));
  })
  .catch(error => {
    dispatch(fetchCardsFailure(error));
  })
}

export const compareUserCards = (allCards, userCards) => dispatch => {
  // This action will compare a user's cards with all cards in order to toggle
  // the correct cards on the CardChooser page when a user wants to view/update
  // their cards
  allCards.forEach((card, index) => {
    userCards.forEach(userCard => {
      if (card._id === userCard._id){
        //toggle the card
        dispatch(toggleCard(index));
      }
    })
  })
}
