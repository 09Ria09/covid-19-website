import React from "react";
import "../css/HomeStart.css";
import MoreInfoDown from "./MoreInfoDown";
import ScrollAnimation from 'react-animate-on-scroll';

class HomeStart extends React.Component {
    updateCOVID19 = () => {
        return fetch('https://coronavirus-19-api.herokuapp.com/countries/Romania').then(response => response.json()).then(response => this.setState({COVID19: response}));
    }

    constructor(props) {
        super(props);
        this.state = {COVID19: {}};
    }

    render() {
        return (
            <article className={'homeStart'}>
                <h1>COVID-19 in Romania</h1>
                <ScrollAnimation className={'startText'} animateIn={'zoomIn'} animateOnce={true} delay={400}
                                 duration={1}>
                    <ul>
                        <li><h2>Cazuri: {this.state.COVID19.cases}</h2></li>
                        <li><h2>Vindecati: {this.state.COVID19.recovered}</h2></li>
                        <li><h2>Morti: {this.state.COVID19.deaths}</h2></li>
                    </ul>
                </ScrollAnimation>
                <MoreInfoDown> Articole </MoreInfoDown>
            </article>
        );
    }

    componentDidMount() {
        this.updateCOVID19();
    }
}

export default HomeStart;