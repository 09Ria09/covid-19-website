import React from "react";
import "../css/CardHolder.css"
import Card from "./Card";
import {FaRegMeh, FaRegNewspaper, FaWheelchair} from 'react-icons/fa'
import {GiVirus} from 'react-icons/gi'

class CardHolder extends React.Component {

    render() {
        return (
            <section id="cardHolder">
                <div style={{'flexGrow': '1'}}/>
                <Card link={'./lorem'}>
                    <FaRegNewspaper className={'cardIcon'}/>
                    <h2>Articole</h2>
                    <p>lorem ipsum dollar sit amet</p>
                </Card>
                <Card link={'./lorem'}>
                    <FaRegMeh className={'cardIcon'}/>
                    <h2>Presa</h2>
                    <p>lorem ipsum dollar sit amet</p>
                </Card>
                <Card link={'./lorem'}>
                    <FaRegNewspaper className={'cardIcon'}/>
                    <h2>Articole din nou</h2>
                    <p>lorem ipsum dollar sit amet</p>
                </Card>
                <Card link={'./lorem'}>
                    <GiVirus className={'cardIcon'}/>
                    <h2>Conspiratii</h2>
                    <p>lorem ipsum dollar sit amet</p>
                </Card>
                <div style={{'flexGrow': '1'}}/>
                <p><span>⮟</span> da mai in jos pentru mai multe informatii despre COVID-19 <span>⮟</span></p>
            </section>
        );
    }
}

export default CardHolder;