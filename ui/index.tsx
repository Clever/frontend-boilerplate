// Top level component of the data sharing overview table.
// Retrieves an app's view of the district's data through
// the app-view-service and displays it with a TabbedDataTable

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ExampleApp from './components/ExampleApp';
import reducers from './store';

// createStore initializes each reducer, and hence populates the initial state. To see initial
// values, see the default values for the state parameter in each reducer; createStore can also
// be seeded with data directly as a third argument to this function.
const store = createStore(reducers, composeWithDevTools(
  // if you wish to add redux middlewares, add them here!
));

export function run() {
  const el = document.getElementById('example-app-wrapper');
  render(<Provider store={store}>
    <ExampleApp />
  </Provider>, el);
}
