import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article10 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'2 Martie 2020'}>Fotbalul nu ia în serios noua pandemie globală</Start>
                <Content type={'a'}>
                    <p>Potrivit agenţiei DPA, instanţa fotbalului european are în program „un
                        schimb de informaţii” şi nu va adopta „măsuri concrete”.
                    </p><p>Al 44-lea Congres al UEFA şi tragerea la sorţi a grupelor Ligii Naţiunilor,
                    programate marţi, vor avea loc aşa cum era prevăzut.
                </p><p>Turneul final al Campionatului European din acest an, primul care se va
                    disputa în 12 ţări din Europa, printre care România, va debuta peste 102 zile în
                    capitala Italiei. Fotbalul italian este afectat acum de epidemia de coronavirus,
                    Serie A hotărând amânarea meciurilor ce urmau să joace în nordul ţării.
                </p><p>Italia este ţara europeană cu cele mai multe decese datorate epidemiei de
                    coronavirus (34).
                </p><p>Arena Națională din București va găzdui patru meciuri de la EURO 2020.
                    Astfel, bucureștenii vor putea urmări trei partide din faza grupelor plus un meci
                    din optimi.
                </p><p>Totodată, dacă echipa naţională va reuşi calificarea la CE, două dintre
                    partidele tricolorilor din faza grupelor s-ar disputa la Bucureşti.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article10;