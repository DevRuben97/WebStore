import React from 'react';
import './Styles/App.css'
import Router from './Componets/Router';
import Header from './Componets/Header';

class App extends React.Component{
  render(){
    return (
      <div className='container'>
        <Header Title='Tienda Virtual'></Header>
         <Router></Router>
      </div>
    );
  }
}

export default App;
