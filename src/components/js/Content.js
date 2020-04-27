import React from "react";
import "../css/Content.css";

class Content extends React.Component {

    render() {
        return (<div
            className={'content ' + (this.props.type === 'a' ? 'contentTypeA ' : '') + (this.props.type === 'b' ? 'contentTypeB ' : '')}
            style={this.props.outerStyle}>
            <div>
                <article style={this.props.innerStyle}>{this.props.children}</article>
            </div>
        </div>);
    }
}

export default Content;