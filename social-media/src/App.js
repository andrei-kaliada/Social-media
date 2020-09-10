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
import {compose} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {initializApp} from './redux/app-reducer';



class App extends React.Component{


  componentDidMount(){
    this.props.initializApp();
}

  render(){
    return (
        <div className="wrapperApp">
          <HeaderContainer />
          <Nav />
          <div className="wrapperApp__content">
            <Route exact path="/" />
            <Route  path="/profile/:userId?"
             render={() => <ProfileContainer />} />
            <Route exact  path="/dialogs" render={ () => <DialogsContainer />} />
            <Route exact  path="/users" render={ () => <UsersContainer />} />
            <Route exact path="/login" render={ () => <Login />} />
          </div>
        </div>
    );
  }
  
}

export default compose(
  connect(null,{initializApp}),
  withRouter,
  )(App);
