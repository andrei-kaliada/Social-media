import React, {useEffect} from 'react';
import './App.scss';
import 'normalize.css';
import Nav from './Components/Navigation/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {initializApp} from './redux/app-reducer';



const App = props => {

  useEffect(() => {
    props.initializApp();
  }, [props.initialization])

  if (!props.initialization) {
    return <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  }

  return <div className="wrapperApp">
          <HeaderContainer />
          <Nav />
          <div className="wrapperApp__content">
            <Route exact path="/" render={() => <div>Main page</div>} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/login" render={() => <Login />} />
          </div>
        </div>;
};

let mapStateToProps = (state) => {
  return {
    initialization:state.appInit.initialized,
  }
}

export default compose(
  connect(mapStateToProps,{initializApp}),
  withRouter,
  )(App);
