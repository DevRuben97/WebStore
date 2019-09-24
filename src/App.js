import React from 'react';
import './Styles/App.css'
import Router from './Componets/Router';

class App extends React.Component{
  render(){
    return (
      <div className='container'>
         <Router></Router>
      </div>
    );
  }
}

export default App;
