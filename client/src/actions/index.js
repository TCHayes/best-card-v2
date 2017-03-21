
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
