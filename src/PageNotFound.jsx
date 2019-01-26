import React, {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";

const PageNotFound = () => Component {
    render() {
        return (
            <div>
                <h1>404 Page Not Found</h1>
                <div>
                    <BrowserRouter>
                        <Link to='/'>На главную</Link>
                    </BrowserRouter>

                </div>
            </div>
        );
    }
}

export const PageNotFound;