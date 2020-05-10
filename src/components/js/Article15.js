import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article15 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'9 Martie 2020'}>2 cazuri noi confirmate (în total 17)</Start>
                <Content type={'a'}>
                    <p>Au fost confirmate 2 cazuri noi de infecție cu COVID-19, numărul total
                        ajungând astfel la 17. Primul caz este o femeie de 73 de ani din Pârscov, jud.
                        Buzău, care s-a prezentat cu febră pe 8 martie la Spitalul Județean Buzău,
                        după ce cu o săptămână înainte venise din Italia, ea a fost testată pozitiv cu
                        COVID-19 și a fost internată la spitalul Matei Balș din București.
                    </p><p>Al 2-lea caz este un bărbat de 60 de ani din București, care era internat la
                    spitalul Dimitrie Gerota în momentul în care a fost testat pozitiv, acesta a
                    călătorit în teritoriile palestiniene, în perioada 21-26 februarie
                    2020. Bărbatul de 60 de ani din București, fost ofițer MAI, a mințit că nu a
                    fost plecat din țară, și a infectat în mod direct sau indirect cu COVID-19 alte
                    13 persoane. &quot;Aceasta arată inconștiența acelui om care nu a dat detaliile
                    necesare și nu s-a prezentat la timp&quot;, a spus Nelu Tătaru, Ministrul
                    Sănătății. Parchetul de pe lângă Judecătoria Sector 2 a deschis un dosar
                    penal pe numele acestui bărbat, sub aspectul săvârșirii infracțiunii prevăzute
                    de art. 352 CP.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article15;