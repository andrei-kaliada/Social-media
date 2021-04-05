import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store.ts';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';


  ReactDOM.render(
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </Provider>,
    document.getElementById('root')
  );


