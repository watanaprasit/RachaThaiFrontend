import axios from 'axios';

// Action Types
const FETCH_CONSONANTS_REQUEST = 'FETCH_CONSONANTS_REQUEST';
const FETCH_CONSONANTS_SUCCESS = 'FETCH_CONSONANTS_SUCCESS';
const FETCH_CONSONANTS_FAILURE = 'FETCH_CONSONANTS_FAILURE';

// Action Creators
export const fetchConsonants = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CONSONANTS_REQUEST });

    axios
      .get('http://localhost:8000/api/consonants/')
      .then((response) => {
        // Ensure the response is an array
        if (Array.isArray(response.data)) {
          dispatch({
            type: FETCH_CONSONANTS_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: FETCH_CONSONANTS_FAILURE,
            error: 'Invalid response format, expected an array.',
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CONSONANTS_FAILURE,
          error: error.message,
        });
      });
  };
};
