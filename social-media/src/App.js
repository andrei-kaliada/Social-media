import React, {useEffect, Suspense } from 'react';
import './App.scss';
import 'normalize.css';
import Nav from './Components/Navigation/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer.ts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {initializApp} from './redux/app-reducer.ts';
import LazyLoad from './hoc/LazyLoad';

const DialogsContainer = React.lazy(() =>  import('./Components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() =>  import('./Components/Users/UsersContainer.tsx'));
const Login = React.lazy(() =>  import('./Components/Login/Login'));



const App = props => {

  useEffect(() => {
    props.initializApp();
  }, [props.initialization])

  if (!props.initialization) {
    return <div className="test">
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>;
  }

  return <div className="App">
          <HeaderContainer />
          <Nav />
          <div className="mainContent">
            <Route exact path="/" render={() => <div>Main page</div>} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route exact path="/dialogs" render={LazyLoad(DialogsContainer)} />
            <Route exact path="/users" render={LazyLoad(UsersContainer)} />
            <Route exact path="/login" render={LazyLoad(Login)} />
          </div>
        </div>
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
