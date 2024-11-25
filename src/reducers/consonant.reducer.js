const initialState = {
  consonants: [],  // Make sure this is an array by default
  loading: false,
  error: null,
};

const consonantReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CONSONANTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CONSONANTS_SUCCESS':
      return { ...state, loading: false, consonants: action.payload };
    case 'FETCH_CONSONANTS_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default consonantReducer;

  