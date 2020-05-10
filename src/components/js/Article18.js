import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article18 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'12 Martie 2020'}>12 cazuri noi confirmate (în total 59)</Start>
                <Content type={'a'}>
                    <p>Pe 12 martie au fost confirmate 12 cazuri de persoane infectate cu virusul
                        COVID. Cazul 48 – o femeie, 20 de ani, din București, contact direct cu un
                        șofer internat la Spitalul Gerota. Cazul 49 – o femeie, 45 de ani din Cluj,
                        venită din Italia și aflată în carantină în Arad, fiind ulterior transferată la
                        Spitalul de Boli Infecțioase Timișoara. Cazul 50 - o femeie de 54 de ani din
                        Neamț, care a venit pe 1 martie, din Italia și a fost internată la Spitalul
                        Roman pe 11 martie, cu tuse, febră și faringită. Cazul 51 – un bărbat 21 ani,
                        jud. Mureș, șofer de TIR, a călători în Italia în perioada 4-6 martie, pe 10
                        martie 2020 a avut simptome care se încadrau în definiția de caz de COVID-
                        19 și a fost internat la secția de boli infecțioase a Spitalului județean din Tg.
                        Mureș, ulterior a fost transferat la Cluj-Napoca. Cazul 52 – o femeie, 33 ani,
                        care lucrează în Trentino, Italia și s-a intors pe 10.03.2020, iar pe 11.03.2020
                        a fost internată cu durere în gât la Spitalul de Boli Infecțioase Cluj-
                        Napoca. Cazul 53 – un bărbat, 53 ani, Covasna, venit din Italia, Trentino, pe
                        08.03 și autoizolat la domiciliu, fiind contact cu un caz pozitiv. Cazurile 54-
                        59 au intrat în contact cu femeia din Hunedoara, 26 de ani (cazul 26 din 10
                        martie), care a plecat din izolarea la domiciliu și s-a plimbat o săptămână
                        prin județ, timp în care s-a internat la două spitale, fără să spună că se
                        întorsese dintr-o zonă roșie din Italia, pentru nerespectarea izolării la
                        domiciliu i s-a întocmit dosar penal. Cazurile 54-59 sunt o femeie, 58 ani,
                        pacient, o femeie, 74 ani, pacient, o femeie, 52 ani, pacient, o femeie, 45 ani,
                        autoizolată la domiciliu, cadru medical, o femeie, 53 ani, autoizolată la
                        domiciliu, cadru medical, o femeie (cazul 59), 45 ani, autoizolată la
                        domiciliu, cadru medical.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article18;