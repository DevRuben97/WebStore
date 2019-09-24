import React from 'react';
import Header from './Header';

class Home extends React.Component{
    render(){
        return(
            <div className= "container">
                <Header Title='Tienda Virtual'></Header>
                <h2>TestHome</h2>
            </div>
        )
    }
}

export default Home;