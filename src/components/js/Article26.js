import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article26 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'21 Martie 2020'}>Număr actualizat de cazuri</Start>
                <Content type={'a'}>
                    <p>Până astăzi, 21 martie, pe teritoriul României, au fost confirmate 367 de cazuri de persoane
                        infectate cu virusul COVID – 19 (coronavirus). Dintre cele 367 de persoane confirmate pozitiv,
                        52 au fost declarate vindecate și externate (36 la Timișoara, 11 la București, 3 la Craiova,
                        unul la Constanța și unul la Iași).
                    </p><p>De la ultima informare transmisă de Grupul de Comunicare Strategică, transmisă ieri, 20
                    martie, ora 13.00, au fost înregistrate alte 59 de noi cazuri de îmbolnăvire.
                </p><p>Pacienții nou confirmați au vârsta cuprinsă între un an și 74 de ani.
                </p><p>La ATI, în acest moment, sunt internați 14 pacienți, din care 3 în stare gravă. Starea de
                    sănătate a celorlalți pacienți este bună, staționară.
                </p><p>Pe teritoriul României, în carantină instituționalizată sunt 4.207 de persoane pentru care se
                    efectuează verificări pentru a depista dacă au contactat virusul COVID – 19 (coronavirus). Alte
                    55.198 de persoane sunt în izolare la domiciliu și se află sub monitorizare medicală.
                </p><p>Până la această dată, la nivel național, au fost prelucrate 8.915 de teste, din care 40 în
                    unități medicale private.
                </p><p>În ultimele 24 de ore, au fost înregistrate 1.501 de apeluri la numărul unic de urgență 112 și
                    5.704 la linia TELVERDE (0800 800 358), deschisă special pentru informarea cetățenilor.
                </p><p>Până în prezent, prin structurile abilitate ale MAI au fost întocmite 117 dosare penale, sub
                    aspectul săvârșirii infracțiunii de zădărnicirea combaterii bolilor, faptă prevăzută şi pedepsită de
                    art. 352 alin. 1 Cod Penal. Totodată, Poliția a aplicat 329 de sancțiuni contravenționale pentru
                    nerespectarea măsurilor de izolare/carantină.
                </p><p>Le reamintim cetățenilor să ia în considerare doar informațiile verificate prin sursele oficiale
                    și să apeleze pentru recomandări și alte informații la linia TELVERDE - 0800.800.358. Numărul
                    TELVERDE nu este un număr de urgență, este o linie telefonică alocată strict pentru informarea
                    cetățenilor. De asemenea, românii aflați în străinătate pot solicita informații despre prevenirea și
                    combaterea virusului la linia special dedicată lor, +4021.320.20.20.
                </p></Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article26;