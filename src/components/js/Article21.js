import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article21 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'15 Martie 2020'}>16 cazuri noi confirmate (în total 139)</Start>
                <Content type={'a'}>
                    <p>Autoritățile au decis ca Grupul de comunicare strategică să nu mai anunța noile cazuri anunțate
                        pe măsură ce sunt confirmate, ci doar o singură dată pe zi, la ora 18.00.
                    </p><p>Pe 15 martie până la ora 17:00 pe teritoriul României, au fost confirmate 16 cazuri de
                    persoane infectate cu virusul COVID-19, numărul total ajungând la 139 de persoane, dintre aceștia 9
                    a fost declarați vindecați și au fost externați. Cele 16 cazuri noi confirmate, au fost după cum
                    urmează: 4 cazuri în București, 4 în Arad, 3 în Brașov, 2 în Brăila și câte 1 caz în Constanța,
                    Teleorman și Iași. Toate persoanele nou confirmate pozitiv pentru COVID-19 au fost contacți ale unor
                    cazuri pozitive, sau ale persoanelor aflate în carantină. Cele 16 persoane aveau vârsta cuprinsă
                    între 5 ani și 71 de ani.
                </p><p>Pe teritoriul României, în carantină instituționalizată pe 15 martie erau 2.855 de persoane
                    pentru care erau efectuate verificări pentru a depista dacă au contactat coronavirusul. Alte 14.640
                    de persoane erau în izolare la domiciliu și se aflau sub monitorizare medicală. Până la acestă dată
                    au fost prelucrate 3.205 teste. Dintre acestea, 3.066 au fost negative. Au fost înregistrate 36 de
                    dosare penale, sub aspectul săvârșirii infracțiunii de zădărnicirea combaterii bolilor, faptă
                    prevăzută și pedepsită de art. 352 alin. 1 Cod Penal.
                </p></Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article21;