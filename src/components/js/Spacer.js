import React from "react";
import "../css/Spacer.css";

class Spacer extends React.Component {

    render() {
        return (
            <div className={'spacer ' + (this.props.type === 'a' ? 'spacerTypeA ' : '')} style={this.props.style}/>
        );
    }
}

export default Spacer;