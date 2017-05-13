import cookie from 'react-cookie';

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const TOGGLE_CARD = 'TOGGLE_CARD';
export const toggleCard = (cardIndex) => ({
  type: TOGGLE_CARD,
  target: cardIndex
});

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = (username) => ({
  type: SET_USERNAME,
  username: username
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  cards: data
});

export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  error
});

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const addUserSuccess = (data) => ({
  type: ADD_USER_SUCCESS,
});

export const ADD_USER_CARDS_SUCCESS = 'ADD_USER_CARDS_SUCCESS';
export const addUserCardsSuccess = (data) => ({
  type: ADD_USER_CARDS_SUCCESS,
});

export const fetchUser = () => dispatch => {
  const headers = cookie.load('headers');
  console.log(headers);
  return fetch(`/api/users/?token=${cookie.load('token')}`,
              {headers: headers}).then(response => {
      if (!response.ok) {
          throw new Error(response.statusText);
      }
      return response.json();
  })
  .then(data => {
      dispatch(fetchUserSuccess(data.cards));
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
