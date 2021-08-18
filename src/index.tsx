import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// By default, React Query Devtools are not included in production bundles 
// when process.env.NODE_ENV === 'production', 
// so you don't need to worry about excluding them during a production build.
import { ReactQueryDevtools } from 'react-query/devtools' 

import App from './app/App';
import store from './state/store';

import './styles/index.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools position={"bottom-right"}/>

    </QueryClientProvider>
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
