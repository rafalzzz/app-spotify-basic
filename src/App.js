import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import {store} from './store';

import {Layout} from './modules/index'

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
