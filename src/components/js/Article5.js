import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article5 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'28 Februarie 2020'}>Linia verde pentru coronavirus, disponibilă <nobr>24/24</nobr>
                </Start>
                <Content type={'a'}>
                    <p>Linia verde pusă la dispoziție de Ministerul Sănătăţii pentru coronavirus va
                        fi disponibilă 24 de ore din 24, faţă de programul de până acum, care era de la
                        ora 8.00 la 23.00.</p>
                    <p><strong>Linia TELVERDE este 0800800358.</strong></p>
                    <p>Comitetul Naţional pentru Situaţii Speciale de Urgenţă a decis acest lucru,
                        vineri, la şedinţa care a avut loc la Ministerul de Interne.</p>
                    <p>În cadrul aceleiași ședințe s-a mai luat hotărârea ca serviciile de ambulanţă
                        judeţene să pună la dispoziţie ambulanţe de tip A pentru transportul probelor
                        biologice către centrele de testare, dacă maşinile DSP sunt indisponibile.</p>
                    <p>Comitetul Naţional pentru Situaţii Speciale de Urgenţă a decis totodată să
                        modifice chestionarele care trebuie completate de persoanele care vin din zonele
                        de risc. Conform modificărilor, aceste formulare vor conţine şi declaraţii pe
                        propria răspundere.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article5;