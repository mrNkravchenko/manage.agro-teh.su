import React, {Component, ReactFragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch, NavLink as NavLinkBase} from "react-router-dom";
import Home from 'Home';
import About from 'About';
import PageNotFound from 'PageNotFound';
import {LoginService as Login} from "./services/login";

const navLinkStyle = {
    padding: 4,
    transition: '0.4s',
    textDecoration: 'none'
};

const navLinkStyleActive = {
    color: 'coral'
};

const NavLink = (props) => (
    <NavLinkBase
        {...props}
        style={navLinkStyle}
        activeStyle={navLinkStyleActive}
    />
);

class App extends Component{
    login = Login;

    componentDidMount() {
        console.log('didMount');
        this.login.login('', '',).then();
    }


    render() {

        return (
            <BrowserRouter>
                <ReactFragment>
                    <nav>
                        <NavLink to='/' exaxt>Home</NavLink>
                        <NavLink to='/about' exaxt>About</NavLink>
                    </nav>
                    <Switch>
                        <Route path='/' component={Home} exact />

                        <Route path='/about' component={About} exact />

                        <Route component={PageNotFound} />
                    </Switch>


                </ReactFragment>
            </BrowserRouter>
        )
    }
}

export default App;