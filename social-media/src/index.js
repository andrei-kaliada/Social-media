import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';


export let renderEntierTree = (state) => {
   
ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
      dispatch={store.dispatch.bind(store)} 
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
} 

renderEntierTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntierTree(state);  
});

