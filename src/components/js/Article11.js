import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article11 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'2 Martie 2020'}>Spital din România în stare de mizerie cruntă pe timp de criză
                    de <nobr>COVID-19</nobr></Start>
                <Content type={'a'}>
                    <p>Deputatul USR Emanuel Ungureanu a publicat, pe Facebook, mai multe
                        imagini care ar fi făcute în Spitalul Municipal Sighet, el spunând că „virusul
                        coronavirus nu poate intra acolo, îl omoară imediat Stafilococul Auriu
                        și Acinetobacter u”. Acesta a aruncat vina către Sorina Pintea, acuzată de
                        corupție și mită.
                    </p><p>„În timp ce doamna Sorina Pintea a fost izolată de coronavirusul mitei în
                    beciul domnesc de către DNA, spitalele din Maramureș, unde fosta ministră
                    și senatorul Liviu Pop sunt baroni ai șpăgii, zac în mizerie cruntă.
                </p><p>Un angajat al Spitalului municipal Sighet mi-a transmis aceste imagini
                    de groază care arată mizeria cruntă în care se scaldă sistemul sanitar din
                    Maramureș patronat de clanuri de tip mafiot virusate de microbul șpăgii.
                </p><p>Aveți idee cât este mita pentru un post de asistentă medicală în această
                    cocină?”</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article11;