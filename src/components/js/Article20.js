import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article20 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'14 Martie 2020'}>28 cazuri noi confirmate (în total 123)</Start>
                <Content type={'a'}>
                    <p>Cazul 96 - o femeie de 47 ani, din București, contact direct al cazului 45, asimptomatică, aflată
                        în autoizolare la domiciliu. Cazul 97 - un bărbat de 39 ani, din judetul Dolj, care s-a întors
                        pe 05.03.2020 din Brescia, aflat în autoizolare până în 12.03 când a fost internat la Spitalul
                        de boli infecțioase din Craiova cu simptome specifice. Cazul 98 - o femeie de 53 de ani, din
                        Constanța, medic de laborator, care a călătorit în Austria și Germania. Cazul 99 - un bărbat de
                        54 ani, din Constanța, soțul cazului 98; cei doi s-au întors pe 7 martie 2020 din Viena.
                    </p><p>Cazurile 100, 101 și 102 - trei membri PNL - deputatul PNL, Lucian Heiuș, primarul Devei,
                    Florin Oancea, și administratorul public al Devei Adrian Nicolae David; toți 3 au fost în contact cu
                    senatorul Chițac și se aflau în izolare la domiciliu, după ce au participat la reuniunea BPN a PNL
                    la care a participat și senatorul Chițac. Ludovic Orban și miniștrii prezenți și membrii BEX PNL și
                    toți senatorii din grupul senatorial PNL au intrat în izolare la domiciliu, până la rezultatul
                    testului pentru COVID.
                </p><p>Cazul 103 - un bărbat de 51 ani, din Brașov, întors din Italia pe 12.03. 2020, aflat în
                    carantină. Cazul 104 - un tânăr de 19 ani, din Hunedoara, contact al cazului 59. Cazul 105 - un
                    copil de 4 ani, din Hunedoara, contact al cazului 59 din 12 martie (cadru medical care a intrat în
                    contact cu femeia din Hunedoara, 26 de ani - cazul 26 din 10 martie). Cazul 106 - o femeie de 43
                    ani, din Hunedoara. Cazul 107 - o femeie de 44 ani, din Hunedoara. Cazul 108 - o femeie de 41 ani,
                    din Hunedoara. Cazurile 106-108 au fost în contact cu cazul 26 din 10 martie (tânăra de 26 de ani
                    care nu a respectat regulile izolării). Cazul 109 - un bărbat, 55 ani din Timișoara, aflat în
                    carantină.
                </p><p>Cazul 110 - un bărbat de 31 ani, din Constanța, contact cu cazul 67 (senatorul Chițac) și 68
                    (care au fost în contact cu senatorul Chițac). Cazul 111 - o femeie de 53 ani, din Brașov, contact
                    cu cazul 76 (bărbat venit din Boston). Cazul 112 - o femeie de 33 ani, din Timișoara, venită din
                    Italia în 12.03.2020. Cazul 113 - un bărbat de 36 ani, din Timișoara, venit din Italia în
                    12.03.2020, aflat în carantină în Timișoara. Cazul 114 - o femeie de 38 ani, din Hunedoara, contact
                    cu cazul 26 din 10 martie (tânăra de 26 de ani care nu a respectat autoizolarea). Cazul 115 - o
                    femeie de 45 ani, din Hunedoara, contact cu cazul 26. Ambele cazuri (114 și 115) sunt asistente
                    medicale. Cazul 116 - un bărbat de 60 ani, din Caraș Severin, aflat în carantină în Reșița, întors
                    din Italia în 11.03.2020.
                </p><p>Cazul 117 - o femeie de 43 ani din Vaslui, venită din Italia, aflată în carantină la Arad,
                    internată la Spitalul de Boli Infecțioase din Timișoara. Cazul 118 - o femeie de 33 ani, din
                    Constanța, contact cu cazul 67- senatorul PNL Chițac. Acesta a infectat mai multe persoane, între
                    care soția, fiul, asistentul său, dar și un deputat PNL, primarul Devei și administratorul public al
                    orașului. Cazul 119 - o femeie de 25 ani, din Cluj Napoca, întoarsă din Berlin în 11.03.2020. Cazul
                    120 - un bărbat de 46 ani, din Satu Mare, întors din Italia în 11.03.2020, aflat în carantină. Cazul
                    121 - un bărbat de 37 ani, din Bucuresti, întors din Norvegia în 13.03.2020, internat în Spitalul de
                    Boli Infecțioase Victor Babeș din București.
                </p><p>Cazul 122 - o femeie de 58 ani, din București, asistent medical Spitalul Gerota, contact cu cazul
                    30 din 11 martie (medic gastroenterolog care l-a îngrijit pe fostul polițist în vârstă de 60 de ani
                    care a infectat mai multe persoane). Cazul 123 - un tânăr de 24 ani, din București, inginer
                    horticol, ADP sector 4, contact cu cazul 17 (fostului ofițer MAI).
                </p></Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article20;