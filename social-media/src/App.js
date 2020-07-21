import React from 'react';
import './App.scss';
import 'normalize.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navigation/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs';
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
           render={() => <Profile 
          dispatch={props.dispatch} 
          newPostsText={props.state.profilePage.newPostsText}
          posts={props.state.profilePage.posts}
          />} />
          <Route path="/dialogs" render={ () => <Dialogs dispatch={props.dispatch}
           dialogsPage={props.state.dialogsPage} />} />
        </div>
      </div>
    </Router>

  );
}

export default App;
