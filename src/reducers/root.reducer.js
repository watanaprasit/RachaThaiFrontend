import { combineReducers } from 'redux';
import consonantReducer from './consonant.reducer';

// Combine individual reducers into one root reducer
const rootReducer = combineReducers({
  consonants: consonantReducer,  // You can add more reducers here as your app grows
});

export default rootReducer;
