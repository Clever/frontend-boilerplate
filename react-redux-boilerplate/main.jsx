// Top level component of the data sharing overview table.
// Retrieves an app's view of the district's data through
// the app-view-service and displays it with a TabbedDataTable

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ExampleApp from './components/ExampleApp';
import store from './store';

function main() {
  const el = document.getElementById('example-app-wrapper');
  render(<Provider store={store}>
    <ExampleApp />
  </Provider>, el);
}

main();
