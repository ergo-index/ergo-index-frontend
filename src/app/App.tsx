import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Pages from '../routes/Pages';
import './App.scss';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Route component={Pages} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
