import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article6 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'29 Februarie 2020'}>Fosta ministră a Sănătății, acuzată de corupție în timp ce în
                    țară coronavirusul debutează</Start>
                <Content type={'a'}>
                    <p>Sorina Pintea a fost reținută de procurorii DNA pentru luare de mită în
                        formă continuată.
                        Fost ministru al Sănătății în guvernul Dăncilă, Pintea este acuzată că ar fi
                        primit în două tranșe 10.000 de euro și 120.000 de mii de lei de la reprezentații
                        unei firme medicale.</p>
                    <p>Anchetatorii spun că ar fi luat acești bani pentru a își îndeplini atribuțiile sale
                        de serviciu, Pintea fiind managerul Spitalului Județean din Baia Mare. Procurorii
                        cer arestarea ei pentru 30 de zile.</p>
                    <p>Potrivit DNA, Sorina Pintea ar fi primit prima tranșă de bani în decembrie
                        anul trecut, ca să încheie anumite acte în calitate de manager și ordonator de
                        credite al Spitalului Județean din Baia Mare.
                        Anchetatorii spun că era vorba despre un contract despre amenajarea
                        blocului operator.</p>
                    <p>Inculpata Sorina Pintea ar fi primit printr-un intermediar de la reprezentații
                        unei societăți comerciale, sumele de 10.000 de euro și 120.000 de mii de lei,
                        care nu i s-ar fi cuvenit, reprezentând un procent de 7% din valoarea unui
                        contract de achiziție publică.</p>
                    <p>Tot anchetatorii spun că ultima tranșă de 120.000 de lei i-a fost dată acesteia
                        chiar în biroul ei de manager al Spitalului Județean din Baia Mare. Acolo,
                        procurorii anticorupție i-ar fi organizat un flagrant.</p>
                    <p>Dupa ce au încheiat perchezițiile și au ridicat dovezi, procurorii au condus-o
                        pe Pintea la sediul central al DNA pentru audieri.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article6;