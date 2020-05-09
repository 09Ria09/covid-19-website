import React from "react";
import "../css/CardHolder.css"
import Card from "./Card";
import MoreInfoDown from "./MoreInfoDown";
import ScrollAnimation from 'react-animate-on-scroll';

class CardHolder extends React.Component {

    render() {
        return (
            <div className={"cardHolderContainer"}>
            <ScrollAnimation animateIn={'zoomIn'} animateOnce={true} duration={0.4}>
            <section className={"cardHolder"}>
                <Card link={'./Article1'}>
                    <h2>Informații despre noul <nobr>COVID-19</nobr></h2>
                    <p>26 Februarie 2020</p>
                </Card>
                <Card link={'/Article2'}>
                    <h2>Primul caz de coronavirus în România</h2>
                    <p>26 Februarie 2020</p>
                </Card>
                <Card link={'/Article3'}>
                    <h2>Autoritățile din Gorj aprobă noi măsuri contra COVID19</h2>
                    <p>26 Februarie 2020</p>
                </Card>
                <Card link={'/Article4'}>
                    <h2>Detalii despre femeia din Timișoara infectată cu noul
                        virus</h2>
                    <p>27 Februarie 2020</p>
                </Card>
                <Card link={'/Article5'}>
                    <h2>Linia verde pentru coronavirus, disponibilă <nobr>24/24</nobr></h2>
                    <p>28 Februarie 2020</p>
                </Card>
                <Card link={'/Article6'}>
                    <h2>Fosta ministră a Sănătății, acuzată de corupție în timp ce în
                        țară coronavirusul debutează</h2>
                    <p>29 Februarie 2020</p>
                </Card>
                <Card link={'/Article7'}>
                    <h2>Coronavirus în lume</h2>
                    <p>1 Martie 2020</p>
                </Card>
                <Card link={'/Article8'}>
                    <h2>Cel mai des întâlnite <nobr>8 întrebări</nobr> despre coronavirus,
                        în România
                    </h2>
                    <p>2 Martie 2020</p>
                </Card>
                <Card link={'/Article9'}>
                    <h2>Primul pacient cu coronavirus din România a fost declarat vindecat
                        şi va fi externat</h2>
                    <p>2 Martie 2020</p>
                </Card>
                <Card link={'/Article10'}>
                    <h2>Fotbalul nu ia în serios noua pandemie globală</h2>
                    <p>2 Martie 2020</p>
                </Card>
                <Card link={'/Article11'}>
                    <h2>Spital din România în stare de mizerie cruntă pe timp de criză
                        de <nobr>COVID-19</nobr></h2>
                    <p>2 Martie 2020</p>
                </Card>
                <Card link={'/Article12'}>
                    <h2>Măsuri mai stricte decât în Italia la granițe</h2>
                    <p>3 Martie 2020</p>
                </Card>
                <Card link={'/Article13'}>
                    <h2>Cinci dosare penale, deschise în urma coronavirusului</h2>
                    <p>3 Martie 2020</p>
                </Card>
                <Card link={'/Article14'}>
                    <h2>Un medic chirurg avertizează, în plină epidemie de coronavirus: Nu
                        mai cumpărați măști medicale!</h2>
                    <p>3 Martie 2020</p>
                </Card>
            </section>
            </ScrollAnimation></div>
        );
    }
}

export default CardHolder;