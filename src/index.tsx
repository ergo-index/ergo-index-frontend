import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './state/store';

import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*
TODOs (loosely order of importance -- pick any)
TODO: Style landing.tsx (very important!)
TODO: Clean up and reformat (and indent) the stylesheets for various landing components
TODO: Clean up the code in Landing.tsx -- maybe extract the login and sign up modals into their own components
TODO: Delete the commented out code in FundsDuck.tsx?
 */
