import React from 'react';
import './App.scss';
import 'normalize.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navigation/Nav';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App(props) {
  return (
    <Router>
      <div className="wrapperApp">
        <Header />
        <Nav />
        <div className="wrapperApp__content">
          <Route exact path="/" />
          <Route path="/profile"
           render={() => <Profile />} />
          <Route path="/dialogs" render={ () => <DialogsContainer />} />
        </div>
      </div>
    </Router>

  );
}

export default App;
