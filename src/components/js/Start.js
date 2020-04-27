import React from "react";
import "../css/Start.css";
import CardHolder from "./CardHolder";

class Start extends React.Component {
    updateCOVID19 = () => {
        return fetch('https://coronavirus-19-api.herokuapp.com/countries/Romania').then(response => response.json()).then(response => this.setState({COVID19: response}));
    }

    constructor(props) {
        super(props);
        this.state = {COVID19: {}};
    }

    render() {
        return (
            <article id={'start'}><h1>COVID-19 in Romania</h1>
                <ul>
                    <li><h2>Cazuri: {this.state.COVID19.cases}</h2></li>
                    <li><h2>Cazuri Noi: {this.state.COVID19.todayCases}</h2></li>
                    <li><h2>Morti: {this.state.COVID19.deaths}</h2></li>
                    <li><h2>Vindecati: {this.state.COVID19.recovered}</h2></li>
                </ul>
                <CardHolder/>
            </article>
        );
    }

    componentDidMount() {
        this.updateCOVID19();
    }
}

export default Start;