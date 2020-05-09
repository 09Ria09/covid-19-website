import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article7 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'1 Martie 2020'}>Coronavirus în lume</Start>
                <Content type={'a'}>
                    <p>Dacă începând cu data de 20 ianuarie erau doar patru cazuri de coronavirus
                        în afara Chinei. În data de 19 februarie, ajungem la 1.000 de cazuri. Iar de pe 18
                        februarie și până ieri se ajunge la 4.900 de cazuri.</p>
                    <p>Agenția spațială americană NASA a publicat imagini prin satelit care indică
                        o scădere dramatică a nivelului de poluare în China, ceea ce este „cel puțin
                        parțial” din cauza încetinirii economice determinate de coronavirus.</p>
                    <p>Reducerea vine pe fondul scăderii activității în fabricile din China, pentru
                        limitarea răspândirii virusului.</p>
                    <p>Coronavirusul este prezent în peste 50 de țări, dar marea majoritate a infecțiilor
                        și a deceselor sunt China.</p>
                    <p>Pe plan global în momentul actual, aproape 3.000 de oameni au fost uciși iar
                        87.000 au fost infectați cu coronavirus. Răspândirea virusului a fost confirmată
                        și în Irlanda, Luxemburg și Ecuador, iar cele mai mari focare în afara Chinei se
                        regăsesc în Coreea de Sud, Iran și Italia.</p>
                </Content>
                <Content type={'a'}>
                    <p>Donald Trump a catalogat epidemia de coronavirus drept o „farsă”, în ciuda
                        faptului că a omorât mai mult de 2.900 de oameni pe tot globul, printre care și
                        un american din statul Washington.</p>
                    <p>Președintele Statelor Unite a afirmat că politicile rivalilor săi din Partidul
                        Democrat cu privire la imigrație a permis răspândirea coronavirusului în
                        SUA, în ciuda faptului că democrații nu mai sunt la putere de patru ani.</p>
                    <p>Trump a numit criza coronavirusului „noua lor farsă”, după investigația
                        privind ingerințele electorale ruse și procedura ce a vizat demiterea sa din
                        fruntea SUA.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article7;