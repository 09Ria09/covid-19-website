import React from "react";
import "../css/Footer.css"
import Content from "./Content";
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends React.Component {
    render() {
        return (
            <Content type={'a'} style={this.props.style}>
                <h2>Membrii echipei:</h2>
                <ul id="membri">
                    <ScrollAnimation animateOnce={true} animateIn={'headShake'} initiallyVisible={true} duration={0}>
                        <li>Alexandru Lăcătușu</li>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn={'headShake'} initiallyVisible={true} duration={0}>
                        <li>Andrei Seliman</li>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn={'headShake'} initiallyVisible={true} duration={0}>
                        <li>Pricop Ilinca</li>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn={'headShake'} initiallyVisible={true} duration={0}>
                        <li>Radu Costache</li>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn={'headShake'} initiallyVisible={true} delay={100}>
                        <li>Rareş Iordan</li>
                    </ScrollAnimation>
                </ul>
            </Content>
        );
    }
}

export default Footer;