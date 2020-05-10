import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article22 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'17 Martie 2020'}>România anunță Consiliul Europei în legătură cu limitarea
                    libertăților fundamentale</Start>
                <Content type={'a'}>
                    <p>În conformitate cu dispozițiile Capitolului VI, art. 48 din Anexa 1 la
                        Decretul nr. 195/ 16 martie 2020, la data de 17 martie 2020, a fost notificat
                        Secretarul General al Consiliului Europei cu privire la măsurile adoptate prin
                        decretul de instituire a stării de urgență pe teritoriul României care au ca
                        efect limitarea exercițiului unor drepturi și libertăți fundamentale.
                    </p><p>Prin notificarea efectuată la nivelul Consiliului Europei, România respectă o
                    procedură care decurge din statutul său de Parte Contractantă la Convenția
                    pentru apărarea drepturilor omului și a libertăților fundamentale.
                </p><p>În cadrul procedurii de notificare a Secretarului General al Consiliului
                    Europei, România a transmis textul Decretului nr 195 din 16 martie 2020,
                    precum și traducerea sa în limba engleză.
                </p><p>Prin punerea la dispoziția Consiliului Europei a întregului text al Decretului
                    au fost furnizate informațiile necesare privind drepturile și libertățile
                    fundamentale al căror exercițiu se limitează în scopul exclusiv al gestionării
                    crizei generate de răspândirea virusului SARS-CoV-2, drepturi explicit
                    menționate în cuprinsul art. 2 al Decretului Prezidențial.
                </p><p>Totodată, notificarea a inclus informații privind contextul instaurării stării de
                    urgență, fiind subliniat caracterul excepțional al măsurilor luate, care privesc
                    limitarea răspândirii virusului SARS-CoV-2 și durata pentru care a fost
                    decretată starea de urgență.
                </p><p>Facem precizarea că, potrivit art. 15 din Convenție, în caz de ”(...) pericol
                    public ce amenință viața națiunii, orice Înaltă Parte Contractantă poate lua
                    măsuri care derogă de la obligaţiile prevăzute de prezenta Convenţie, în
                    măsura strictă în care situaţia o impune şi cu condiţia ca aceste măsuri să nu
                    fie în contradicţie cu alte obligaţii care decurg din dreptul internaţional”.
                </p><p>Pe cale de consecință, pentru adoptarea unor astfel de măsuri nu este
                    necesară obținerea vreunei aprobări de la Secretarul General al Consiliului
                    Europei, statele părți la Convenție având deplina suveranitate de a adopta
                    măsurile pe care le apreciază de cuviință în astfel de situații excepționale (cu
                    limitările stabilite prin Convenție).
                </p><p>Singura obligație ce incumbă autorităților statelor părți este de a informa pe
                    deplin Secretarul General al Consiliului Europei despre măsurile de această
                    natură adoptate, conform art. 15 alin. 3.
                </p><p>De asemenea, la doar o zi distanță de România, vecinii noștri din Republica
                    Moldova au declarat și iei stare de urgență. În acest moment în România
                    sunt 217 cazuri active, iar în Republica Moldova la 30 de cazuri.
                </p></Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article22;