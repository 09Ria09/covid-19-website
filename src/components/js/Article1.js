import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article1 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'26 Februarie 2020'}>Informații despre noul <nobr>COVID-19</nobr></Start>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Scurt Istoric</h1>
                    <p>Pandemia de coronavirus 2019–2020, cunoscută și sub denumirea de
                        coronavirus Wuhan, a început pe 12 decembrie 2019 în centrul orașului Wuhan,
                        China, atunci când a apărut un grup de persoane cu pneumonie de cauză
                        necunoscută, a fost legat în principal de proprietarii de tarabe care lucrau la piața
                        de pește Huanan, care vindeau și animale vii. Ulterior, oamenii de știință chinezi
                        au izolat un nou coronavirus, denumit 2019-nCoV, care s-a dovedit a fi cel puțîn
                        70% similar în secvența genelor Coronavirusul 2019-nCoV a fost identificat în
                        Wuhan, provincia Hubei, China, după ce oamenii au dezvoltat pneumonie fără
                        să aibă o cauză clară și pentru care vaccinurile sau tratamentele existente nu au
                        fost eficiente.</p>
                    <p>Coronavirusurile au fost descoperite la începutul anilor 1930, când a fost
                        dovedit că bronșita infecțioasă aviară a puilor de găînă a fost cauzată de un virus
                        cunoscut acum sub numele de virusul bronșitei infecțioase aviare. Primele
                        coronavirusuri umane au fost descoperite în anii 1960 de cercetătorii de la
                        Common Cold Unit din Salisbury, Marea Britanie, care au arătat că răcelile
                        comune pot fi provocate nu numai de rinovirusuri, dar și de un coronavirus.</p>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Ce e coronavirus?</h1>
                    <p>Noul coronavirus COVID-19 reprezintă o tulpină de coronavirus care nu a
                        mai fost identificată anterior la om și, prin urmare, reprezintă motiv de
                        îngrijorare pentru sănătatea publică, mai ales, având în vedere că există puține
                        cunoștințe despre caracteristicile virusului, despre modalitatea de transmitere
                        între oameni și despre severitatea și tratarea infecțiilor rezultate. La om provoacă
                        infecţii respiratorii, de la răceala comună la boli mai severe, cum ar fi Sindromul
                        respirator din Orientul Mijlociu (MERS) şi Sindromul respirator acut sever
                        (SARS).</p>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Care sunt simptomele?</h1>
                    <p>Cele mai frecvente simptome ale COVID-19 sunt febra, oboseala şi tusea
                        uscată. Unii pacienţi ar mai putea să aibă dureri de cap, congestie nazală, dureri
                        în gât sau diaree. Aceste simptome sunt de obicei uşoare, cu debut treptat. Unele
                        persoane se infectează, dar nu dezvoltă niciun simptom şi nu se simt rău.
                        Majoritatea oamenilor (aproximativ 80 %) se recuperează fără a avea nevoie de
                        tratament special. Aproximativ 1 din fiecare 6 persoane care suferă de COVID-
                        19 devine grav bolnavă şi prezintă dificultăţi de respiraţie. Persoanele în vârstă,
                        precum şi cele cu probleme medicale subiacente, cum ar fi hipertensiunea
                        arterială, probleme cardiace sau diabet, sunt mai susceptibile să dezvolte o
                        formă gravă. Aproximativ 2 % dintre persoanele suferinde de această boală au murit.
                        Persoanele cu febră, tuse şi dificultăţi de respiraţie trebuie să solicite
                        asistenţă medicală.</p>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Cum se răspândește COVID19?</h1>
                    <p>Oamenii se pot îmbolnăvi de COVID-19 de la alţii care au virusul. Boala
                        poate fi transmisă de la o persoană la alta prin secreţii sub formă de picături
                        mici, care sunt răspândite atunci când persoana infectată tuşeşte sau strănută.
                        Aceste picături se aşează pe obiectele şi suprafeţele din jur. Alte persoane se
                        îmbolnăvesc de COVID-19 atingând aceste obiecte sau suprafeţe, apoi
                        atingându-şi ochii, nasul sau gura. Oamenii pot, de asemenea, să se
                        îmbolnăvească de COVID-19 dacă respiră direct secreţiile răspândite de o
                        persoană infectată care tuşeşte sau strănută. Acesta este motivul pentru care este
                        important să staţi la mai mult de 1 metru de o persoană bolnavă.</p>
                    <p>OMS evaluează cercetările în curs de desfăşurare a modului în care COVID-19
                        este răspândită şi va continua să împărtăşească rezultatele actualizate.</p>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Care sunt metodele de prevenție?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>Spălați-vă mâinile de multe ori.</li>
                        <li>Evitați contactul cu persoane care sunt suspecte de infecții respiratorii
                            acute.
                        </li>
                        <li>Nu vă atingeți ochii , nasul și gură cu mâinile.</li>
                        <li>Acoperiți-vă gură și nasul dacă stranutați sau tușiți.</li>
                        <li>Nu luați medicamente antivirale și nici antibiotice decât în cazul în care
                            va prescrie medicul.
                        </li>
                        <li>Curățați toate suprafețele cu dezinfectanți pe bază de clor sau alcool.</li>
                        <li>Utilizați masca de protecție doar în cazul în care suspectați că sunteți
                            bolnav sau în cazul în care acordați asistență persoanelor bolnave.
                        </li>
                        <li>Sunați la 112 dacă aveți febră, tușiți sau v-ați întors din China sau zonele
                            în carantină din Europa de cel puțîn 14 zile.
                        </li>
                    </ul>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article1;