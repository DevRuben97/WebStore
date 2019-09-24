import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Client/Home';
import About from './Client/About';
import Login from './Auth/Login';

class Router extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/AboutUs' component={About}></Route>
                    <Route path='/Admin/Login' component={Login}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;