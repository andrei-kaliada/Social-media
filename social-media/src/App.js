import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import MainContent from './Components/MainContent';


function App() {
  return (
    <div className="wrapperApp">
      <Header />
      <Nav />
      <MainContent />
    </div>
  );
}

export default App;
