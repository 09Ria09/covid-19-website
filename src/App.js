import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/js/Header';
import Home from "./components/js/Home";
import Lorem from "./components/js/Lorem";
import "animate.css/animate.compat.css";
import {CSSTransition} from "react-transition-group";

const routes = [
    {path: '/', name: 'Home', Component: Home},
    {path: '/Lorem', name: 'Lorem', Component: Lorem},
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
                                        enter: 'animated fixed',
                                        enterActive: slideDirectionIn(),
                                        exit: 'animated absolute',
                                        exitActive: slideDirectionOut()
                                    }}
                                    onEntered={() => window.scrollTo(0, 0)}
                                    onExit={() => document.documentElement.style.overflow = "hidden"}
                                    onExited={() => document.documentElement.style.overflow = ""}
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
