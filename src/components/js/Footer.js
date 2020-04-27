import React from "react";
import "../css/Footer.css"
import Content from "./Content";

class Footer extends React.Component {
    render() {
        return (
            <Content type={'a'}>
                <h2>Membrii echipei:</h2>
                <ul id="membri">
                    <li>Rareş Iordan</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </Content>
        );
    }
}

export default Footer;