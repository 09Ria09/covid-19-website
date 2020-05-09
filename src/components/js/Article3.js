import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article3 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'26 Februarie 2020'}>Autoritățile din Gorj aprobă noi măsuri contra COVID19</Start>
                <Content type={'a'}>
                    <p>În urma propunerii venite din partea noii conduceri a Direcției de Sănătate
                        Publică Gorj, în conformitate cu prevederile legale în vigoare, s-a aprobat în
                        unanimitate ca în toate cazurile de contacți apropiați direcți cu o persoană care a
                        fost depistată pozitiv ca purtător al coronavirusului COVID-19, să se instituie
                        carantina la domiciliu.</p>
                    <p>Se revine astfel la hotărârea Comitetului Județean pentru Situații de Urgență
                        din dimineața zilei de 28 februarie 2020 prin care, la propunerea Direcției de
                        Sănătate Publică Gorj, s-a aprobat mutarea celor cinci persoane aflate în izolare
                        la domiciliu ca urmare a contactului direct cu persoana confirmată cu virusul
                        COVID-19 din comuna Prigoria, sat Dobrana, în carantină în cadrul unuia dintre
                        centrele de carantină din județul Gorj.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article3;