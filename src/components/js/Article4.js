import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article4 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'27 Februarie 2020'}>Detalii despre femeia din Timișoara infectată cu noul
                    virus</Start>
                <Content type={'a'}>
                    <p>Pe 20 februarie aceasta s-a întors dintr-o vacanță de o zi făcută în Milano (s-
                        a întors cu zbor de Bergamo).</p>
                    <p>În weekeendul 22-23 s-a dus la Lugoj unde și-a vizitat 4 prieteni și părinții.
                        În data de 25 februarie aceasta începea să prezinte simptome pentru noul
                        coronavirus.</p>
                    <p>Pe 27, s-a dus la Spitalul Victor Babeș Timișoara unde au testat-o. De ieri
                        până azi au trimis-o acasă în izolare. Astăzi, 28 februarie a ieșit pozitiv Covid-
                        19.</p>
                    <p>Astăzi la ora 16:00 a fost celulă de criză la prefectură, unde au spus că cele 6
                        persoane din Lugoj vor fi testate și li se va cere autoizolare cu pază, jandarmi.
                        Mâine la prânz se anunță rezultatul analizelor celor 6 persoane din Lugoj.</p>
                    <p>WizzAir colaborează cu autoritățile la identificarea tuturor pasagerilor din
                        data de 20 februarie pentru testare și ulterior recomandare pentru autoizolare.
                        Femeia rămâne momentan internată și i se vor face noi teste când se vor
                        ameliora simptomele.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article4;