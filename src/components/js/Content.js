import React from "react";
import "../css/Content.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Content extends React.Component {

    render() {
        return (
            <div className={'contentContainer'} style={this.props.style}>
                <ScrollAnimation animateIn={'zoomIn'} animateOnce={true} duration={0.4}>
                    <div
                        className={'content ' + (this.props.type === 'a' ? 'contentTypeA ' : '') + (this.props.type === 'b' ? 'contentTypeB ' : '')}
                        style={this.props.outerStyle}>
                        <div>
                            <article style={this.props.innerStyle}>{this.props.children}</article>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Content;