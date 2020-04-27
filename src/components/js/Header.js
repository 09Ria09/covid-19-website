import React from "react";
import "../css/Header.css";
import {NavLink} from "react-router-dom";
import {Waypoint} from 'react-waypoint';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <React.Fragment>
                <span id={'headerWaypointContainer'}><Waypoint
                    onEnter={() => this.setState({hide: true})}
                    onLeave={() => this.setState({hide: false})}
                />
                </span>
                <header className={(this.state.hide === true? 'hideHeader ' : 'showHeader ')}><NavLink id={'title'} to="/">
                    <h1>COVID-19</h1></NavLink>
                    <div style={{'flexGrow': '1'}}/>
                    <ul id={'links'}>
                        <li className={'link'}><NavLink to="/lorem"><span>Lorem</span></NavLink></li>
                        <li className={'link'}><NavLink to="/card-holder"><span>Ipsum</span></NavLink></li>
                    </ul>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;