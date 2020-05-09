import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/js/Header';
import Home from "./components/js/Home";
import "animate.css/animate.compat.css";
import {CSSTransition} from "react-transition-group";

import Article1 from "./components/js/Article1";
import Article2 from "./components/js/Article2";
import Article3 from "./components/js/Article3";
import Article4 from "./components/js/Article4";
import Article5 from "./components/js/Article5";
import Article6 from "./components/js/Article6";
import Article7 from "./components/js/Article7";
import Article8 from "./components/js/Article8";
import Article9 from "./components/js/Article9";
import Article10 from "./components/js/Article10";
import Article11 from "./components/js/Article11";
import Article12 from "./components/js/Article12";
import Article13 from "./components/js/Article13";
import Article14 from "./components/js/Article14";

const routes = [
    {path: '/', name: 'Home', Component: Home},
    {path: '/Article1', name: 'Articolul 1', Component: Article1},
    {path: '/Article2', name: 'Articolul 2', Component: Article2},
    {path: '/Article3', name: 'Articolul 3', Component: Article3},
    {path: '/Article4', name: 'Articolul 4', Component: Article4},
    {path: '/Article5', name: 'Articolul 5', Component: Article5},
    {path: '/Article6', name: 'Articolul 6', Component: Article6},
    {path: '/Article7', name: 'Articolul 7', Component: Article7},
    {path: '/Article8', name: 'Articolul 8', Component: Article8},
    {path: '/Article9', name: 'Articolul 9', Component: Article9},
    {path: '/Article10', name: 'Articolul 10', Component: Article10},
    {path: '/Article11', name: 'Articolul 11', Component: Article11},
    {path: '/Article12', name: 'Articolul 12', Component: Article12},
    {path: '/Article13', name: 'Articolul 13', Component: Article13},
    {path: '/Article14', name: 'Articolul 14', Component: Article14},
];

function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <Header/>
                <React.Fragment>
                    {routes.map(({path, Component}) => (
                        <Route key={path} exact path={path}>
                            {({match}) => (
                                <CSSTransition
                                    classNames={{
                                        enter: 'animated',
                                        enterActive: 'zoomIn width100vw',
                                        exit: 'displayNone',
                                    }}
                                    onEnter={() => window.scrollTo(0, 0)}
                                    in={match != null}
                                    timeout={1000}
                                    unmountOnExit
                                >
                                    <div>
                                        <Component/>
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </React.Fragment>
            </HashRouter>
        </React.Fragment>
    );
}

let slideDirection = true;

function slideDirectionIn() {
    if (slideDirection === true) {
        slideDirection = false;
        return 'slideInLeft';
    }
    else {
        slideDirection = true;
        return 'slideInRight';
    }
}

function slideDirectionOut() {
    if (slideDirection === true) {
        return 'slideOutRight';
    }
    else {
        return 'slideOutLeft';
    }
}

export default App;
