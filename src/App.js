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
import Article15 from "./components/js/Article15";
import Article16 from "./components/js/Article16";
import Article17 from "./components/js/Article17";
import Article18 from "./components/js/Article18";
import Article19 from "./components/js/Article19";
import Article20 from "./components/js/Article20";
import Article21 from "./components/js/Article21";
import Article22 from "./components/js/Article22";
import Article23 from "./components/js/Article23";
import Article24 from "./components/js/Article24";
import Article25 from "./components/js/Article25";
import Article26 from "./components/js/Article26";

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
    {path: '/Article15', name: 'Articolul 15', Component: Article15},
    {path: '/Article16', name: 'Articolul 16', Component: Article16},
    {path: '/Article17', name: 'Articolul 17', Component: Article17},
    {path: '/Article18', name: 'Articolul 18', Component: Article18},
    {path: '/Article19', name: 'Articolul 19', Component: Article19},
    {path: '/Article20', name: 'Articolul 20', Component: Article20},
    {path: '/Article21', name: 'Articolul 21', Component: Article21},
    {path: '/Article22', name: 'Articolul 22', Component: Article22},
    {path: '/Article23', name: 'Articolul 23', Component: Article23},
    {path: '/Article24', name: 'Articolul 24', Component: Article24},
    {path: '/Article25', name: 'Articolul 25', Component: Article25},
    {path: '/Article26', name: 'Articolul 26', Component: Article26},
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
                                        enterActive: 'zoomIn width100',
                                        exit: 'displayNone',
                                    }}
                                    onEnter={() => {window.scrollTo(0, 0); document.documentElement.className='noScrollSnap';}}
                                    onEntered={() => document.documentElement.className=''}
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
