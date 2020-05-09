import React from "react";
import "../css/Header.css";
import {NavLink, useLocation} from "react-router-dom";
import {Waypoint} from 'react-waypoint';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
        }
    }

    componentDidMount() {
        setTimeout(() => window.scrollY > 80 * window.innerHeight / 100?this.setState({hide: false}):'', 100);
    }

    render() {
        return (
            <React.Fragment>
                {/*<span id={'headerWaypointContainer'}><Waypoint
                    onEnter={() => window.location.pathname==='/'?this.setState({hide: true}):''}
                    onLeave={() => this.setState({hide: false})}
                />
                </span>*/}
                <header className={(this.state.hide === true ? 'hideHeader ' : 'showHeader ')}><NavLink id={'title'}
                                                                                                        activeClassName={'currentPage'}
                                                                                                        to="/"
                                                                                                        isActive={this.checkHomeIsActive}>
                    <h1>COVID-19</h1></NavLink>
                    <div style={{'flexGrow': '1'}}/>
                    <ul id={'links'}>
                        <li className={'link'}><NavLink activeClassName={'currentPage'}
                                                        to="./Article1"><span>Informații</span></NavLink></li>
                        <li className={'link'}><NavLink activeClassName={'currentPage'}
                                                        to="/Article8"><span>FAQ</span></NavLink></li>
                    </ul>
                </header>
            </React.Fragment>
        );
    }

    checkHomeIsActive(match, location) {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }
}

export default Header;