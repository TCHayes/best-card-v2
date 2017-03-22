
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

export const fetchUser = () => dispatch => {

    return fetch('/api/users').then(response => {
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
