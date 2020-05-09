import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article12 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'3 Martie 2020'}>Măsuri mai stricte decât în Italia la granițe</Start>
                <Content type={'a'}>
                    <p>Măsurile pentru prevenirea răspândirii coronavirusului sunt mult mai stricte
                        în România decât în Italia! Cel puţin asta susţin toţi cei care trec frontiera în ţara
                        noastră. În fiecare zi, prin Vama Nădlac intră peste 300 de oameni, iar la graniţă
                        sunt medici care fac triaj epidemiologic 24 de ore din 24.
                    </p><p>Sute de români tranzitează zilnic Vama Nădlac, iar cei mai mulţi se
                    întorc din Italia, ţara cea mai afectată de coronavirus din Europa.
                </p><p>La graniţa româniei, în fiecare punct de trecere al frontierei există medici
                    care îi verifică pe cei ce vin din străinătate şi care fac triaj epidemiologic 24
                    de ore din 24.
                </p><p>În Arad există a doua cea mai mare comunitate de italieni din România.
                    Autoritățile române ar fi luat măsuri adecvate dacă nu ar fi existat
                    contraexemplul din Italia?</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article12;