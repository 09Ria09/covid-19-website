import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article14 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'3 Martie 2020'}>Un medic chirurg avertizează, în plină epidemie de coronavirus: Nu
                    mai cumpărați măști medicale!</Start>
                <Content type={'a'}>
                    <p>Măștile medicale pot crește riscul unei infecții cu coronavirus dacă nu sunt
                        folosite corespunzător, avertizează chirurgul american Jerome Adams, care le
                        cere oamenilor să nu se mai înghesuie să le cumpere din farmacii și să epuizeze
                        stocurile.
                    </p>
                    <p>„Puteți crește riscul de a vă infecta cu coronavirus purtând masca medicală.
                        Oamenii care nu știu cum să le poarte în mod corect tind să își atingă foarte des
                        fața și, de fapt, așa se vor infecta cu coronavirus ”, a spus medicul, potrivit CNN.
                    </p>
                    <p>”Există lucruri pe care oamenii le pot face pentru a rămâne în siguranță. Și
                        există și lucruri pe care nu ar trebui să le facă, cum ar fi acela de a merge și a
                        cumpăra măști medicale”, a spus medicul, care atrage atenția asupra posibilității
                        ca stocurile să se epuizeze rapid.
                    </p>
                    <p>Mai degrabă, pentru a vă menține sănătoși, pe voi și pe cei din jurul vostru,
                        spălați-vă des pe mâini, evitați să vă atingeți ochii, nasul și gura cu mâinile
                        nespălate și dezinfectați suprafețele.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article14;