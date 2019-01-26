import ReactDOM from 'react-dom';
import React, {Component, ReactFragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch, NavLink as NavLinkBase} from "react-router-dom";
import {LoginService as Login} from "./services/login";
import Home from "./Home";
import About from "./About";
import PageNotFound from "./PageNotFound";
const root = document.getElementById('root');

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
                        <NavLink to='/' exact>Home</NavLink>
                        <NavLink to='/about' exact>About</NavLink>
                    </nav>
                    <Switch>
                        <Route path='/' exact component={Home}  />

                        <Route path='/about' exact component={About}  />

                        <Route component={PageNotFound} />
                    </Switch>


                </ReactFragment>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, root);