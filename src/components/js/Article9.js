import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article9 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'2 Martie 2020'}>Primul pacient cu coronavirus din România a fost declarat vindecat
                    şi va fi externat</Start>
                <Content type={'a'}>
                    <p>Şeful Departamentului pentru situaţii de urgenţă, Raed Arafat, a anunţat că
                        testele tânărului în vârstă de 25 de ani, internat la Institutul &quot;Matei Balş&quot; din
                        Capitală, au ieşit negative.
                    </p><p>Totuşi, acesta nu va fi lăsat să plece acasă unde membrii familiei sale sunt în
                    izolare.
                </p><p>Bărbatul din Gorj internat cu coronavirus a fost supus vineri unui nou test de
                    depistare a virusului, după ce primul a ieşit pozitiv, iar rezultatul a fost unul
                    negativ de această dată.
                </p><p>Acum, el rămâne internat în Capitală şi urmează să fie supus luni celui de-al
                    treilea test de depistare a COVID-19.
                </p><p>Dacă şi acest test va ieşi tot negativ, el probabil va fi lăsat să plece acasă.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article9;