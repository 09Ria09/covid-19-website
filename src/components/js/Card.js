import React from "react";
import "../css/Card.css"
import {Link} from "react-router-dom";

class Card extends React.Component {
    render() {
        return (
            <Link className={'card'} to={this.props.link}>
                {this.props.children}
            </Link>
        );
    }
}

export default Card;