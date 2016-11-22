// combines all the redux reducers into a single store. redux-thunk allows for asynchronous actions;
// see ../actions/index.js for an example.

import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import counter from './counter';
import quote from './quote';

const reducers = combineReducers({
  counter,
  quote,
});

export default reducers;
