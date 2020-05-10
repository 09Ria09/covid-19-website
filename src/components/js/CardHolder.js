import React from "react";
import "../css/CardHolder.css"
import Card from "./Card";
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
                        <Card link={'/Article15'}>
                            <h2>2 cazuri noi confirmate (în total 17)</h2>
                            <p>9 Martie 2020</p>
                        </Card>
                        <Card link={'/Article16'}>
                            <h2>12 cazuri noi confirmate (în total 29)</h2>
                            <p>10 Martie 2020</p>
                        </Card>
                        <Card link={'/Article17'}>
                            <h2>18 cazuri noi confirmate (în total 47)</h2>
                            <p>11 Martie 2020</p>
                        </Card>
                        <Card link={'/Article18'}>
                            <h2>12 cazuri noi confirmate (în total 59)</h2>
                            <p>12 Martie 2020</p>
                        </Card>
                        <Card link={'/Article19'}>
                            <h2>36 cazuri noi confirmate (în total 95)</h2>
                            <p>13 Martie 2020</p>
                        </Card>
                        <Card link={'/Article20'}>
                            <h2>28 cazuri noi confirmate (în total 123)</h2>
                            <p>14 Martie 2020</p>
                        </Card>
                        <Card link={'/Article21'}>
                            <h2>16 cazuri noi confirmate (în total 139)</h2>
                            <p>15 Martie 2020</p>
                        </Card>
                        <Card link={'/Article22'}>
                            <h2>România anunță Consiliul Europei în legătură cu limitarea libertăților fundamentale</h2>
                            <p>17 Martie 2020</p>
                        </Card>
                        <Card link={'/Article23'}>
                            <h2>Moment istoric: Guvernul introduce Ordonanța militară nr.1</h2>
                            <p>18 Martie 2020</p>
                        </Card>
                        <Card link={'/Article24'}>
                            <h2>Ministrul Economiei: „Luăm în discuție inclusiv redeschiderea «Hexi Pharma»”</h2>
                            <p>19 Martie 2020</p>
                        </Card>
                        <Card link={'/Article25'}>
                            <h2>Crește numărul pacienților aflați în stare critică</h2>
                            <p>20 Martie 2020</p>
                        </Card>
                        <Card link={'/Article26'}>
                            <h2>Număr actualizat de cazuri</h2>
                            <p>21 Martie 2020</p>
                        </Card>
                    </section>
                </ScrollAnimation></div>
        );
    }
}

export default CardHolder;