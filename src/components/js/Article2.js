import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article2 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'26 Februarie 2020'}>Primul caz de coronavirus în România</Start>
                <Content type={'a'}>
                    <p>După o serie întreagă de alerte neconfirmate ce au pus țara în alertă, primul
                        caz de COVID19 confirmat în România apare în Gorj, la un tânăr de 25 de ani.
                        Acesta a lucrat la o firmă a italianului Cesare Emenddatori. Tânărul din urmă a
                        stat cinci zile în România, iar când a revenit în țara natală, a fost diagnosticat cu
                        coronavirus.</p>
                    <p>Alte șapte persoane locuiesc în aceeași casă cu tânărul din Gorj, diagnosticat
                        cu coronavirus. Ele vor rămâne la domiciliu și nu vor putea părăsi locuința timp
                        de 14 zile. Bărbatul este din satul Dobrana și inițial nu prezenta simptome.</p>
                    <p>Ministrul Sănătății declară că starea acestuia este bună:<br/>
                        &quot;Suntem în măsură să va anunţăm că în urma efectuării testelor în Gorj avem
                        primul caz de infectare cu coronavirus. Va intra pe schema de tratament. Starea
                        bărbatului este bună. Nu trebuie să ne alărmăm. Mai avem 33 de teste şi vă vom
                        comunica rezultatele imediat cum le vom avea&quot;, a declarat ministrul intermar al
                        Sănătăţii, Victor Costache. – 26 Februarie
                        <br/>&quot;Tânărul este foarte puţin simptomatic, are o uşoară faringită, pentru a fi mai
                        clar, are o uşoară roşeaţă în gât. Pentru asta, evident, rămâne în izolare la &quot;Matei
                        Balş&quot; timp de 14 zile şi i se va acorda tratament simptomatic împotriva durerii,
                        antiinflamator&quot;, a spus Costache la B1 TV. – 26 Februarie</p>
                    <p>Ministrul a declarat că la nivel naţional sunt 189 de persoane în carantină,
                        dintre care 123 sunt din Gorj, persoanele care au intrat în contact fie cu pacientul
                        zero - italianul, fie cu pacientul unu - tânărul internat la &quot;Matei Balş&quot;.–
                        26 Februarie</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article2;