import React from "react"
import MoreInfoDown from "./MoreInfoDown";
import "../css/Start.css";

class Start extends React.Component {
    render() {
        return (
            <article className={'start'}>
                <h1>{this.props.children}</h1>
                <h3>{this.props.description}</h3>
                <MoreInfoDown> Articolul </MoreInfoDown>
            </article>
        );
    }
}

export default Start;