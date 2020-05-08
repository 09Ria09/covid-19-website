import React from "react";

class MoreInfoDown extends React.Component {

    render() {
        const pStyle = {
            bottom: '0',
            color: '#1ffbe0',
            left: '0',
            position: 'absolute',
            right: '0',
            textAlign: 'center',
        };
        const spanStyle = {
            border: 'solid #1ffbe0',
            borderWidth: '0 3px 3px 0',
            display: 'inline-block',
            padding: '6px',
            transform: 'rotate(45deg) translateY(-2px)',
            marginLeft: '4px',
            marginRight: '4px',
        };
        return (
            <p style={pStyle}><span style={spanStyle}/> Mai multe informatii despre COVID-19 <span style={spanStyle}/>
            </p>
        );
    }
}

export default MoreInfoDown;