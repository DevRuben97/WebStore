import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';

class Router extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/AboutUs' component={About}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;