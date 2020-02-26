import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';

import orderReducer from './orderRedux';
import productsReducer from './productsRedux';
import { initialState } from './initialState';

// define reducers
const reducers = {
  order: orderReducer,
  products: productsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  // composeWithDevTools(
  //   applyMiddleware(thunk)
  // )
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
