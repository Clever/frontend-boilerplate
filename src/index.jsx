// Top level component of the data sharing overview table.
// Retrieves an app's view of the district's data through
// the app-view-service and displays it with a TabbedDataTable

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {IndexRedirect, Route, Router, hashHistory} from "react-router";
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import ExampleView from "./components/ExampleView";
import Layout from "./components/Layout";

import reducers from './reducers';

// createStore initializes each reducer, and hence populates the initial state. To see initial
// values, see the default values for the state parameter in each reducer.
const store = createStore(reducers, compose(
  // redux-thunk allows for asynchronous actions; see ./actions/index.js for an example.
  applyMiddleware(thunkMiddleware),
  // add dev tools as middleware; if not present, add identity fn as middleware
  (window.devToolsExtension ? window.devToolsExtension() : (_) => _)
));

export function run() {
  const el = document.getElementById('__MAIN__');
  render(<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRedirect to="/example" />
        <Route path="example(/*)" component={ExampleView} />
      </Route>
    </Router>
  </Provider>, el);
}
