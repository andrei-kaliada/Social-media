import React from 'react';
import './App.scss';
import 'normalize.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navigation/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history/history';



function App() {

  return (
    <Router history={history}>
      <div className="wrapperApp">
        <HeaderContainer />
        <Nav />
        <div className="wrapperApp__content">
          <Route exact path="/" />
          <Route  path="/profile/:userId?"
           render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={ () => <DialogsContainer />} />
          <Route path="/users" render={ () => <UsersContainer />} />
          <Route exact path="/login" render={ () => <Login />} />
        </div>
      </div>
    </Router>

  );
}

export default App;
