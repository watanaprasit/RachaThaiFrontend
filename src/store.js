import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  // For async actions
import rootReducer from './reducers/root.reducer';  // Combine all reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
