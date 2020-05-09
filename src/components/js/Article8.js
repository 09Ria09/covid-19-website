import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article8 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'2 Martie 2020'}>Cel mai des întâlnite <nobr>8 întrebări</nobr> despre coronavirus,
                    în România</Start>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Care este diferența dintre carantină și
                        autoizolarea la domiciliu?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>Carantina se instituie pentru toate persoanele care nu prezintă simptome dar
                            care se întorc din zonele cu transmitere comunitară extinsă a noului coronavirus
                            (COVID-19).
                        </li>
                        <li>Carantina va dura o perioadă de 14 zile și va fi organizată în spații special
                            amenajate, puse la dispoziție de autoritatea locală, în colaborare cu Direcția de
                            Sănătate Publică.
                        </li>
                        <li>Autoizolarea se instituie pentru persoanele care nu prezintă simptome dar:
                            <ul>
                                <li>au călătorit în ultimele 14 zile în regiuni/localități din zonele afectate de
                                    COVID-19, altele decât cele cu transmitere comunitară extinsă
                                </li>
                                <li>au intrat în contact direct cu persoanele cu simptome și care au călătorit în
                                    zone cu transmitere comunitară extinsă
                                </li>
                                <li>au intrat în contact direct cu persoanele care au fost confirmate cu
                                    coronavirus (COVID-19).
                                </li>
                                <li>membrii de familie ai unei persoane care se încadrează în una dintre
                                    situațiile de mai sus
                                </li>
                            </ul></li>
                        <li>Aceste persoane se vor autoizola la domiciliu pentru o perioadă de 14 zile de
                            la data întoarcerii din călătorie, respectiv de la data ultimului contact cu o
                            persoană simptomatică/confirmata. În acest timp, vor fi monitorizate de către
                            medicul de familie sau, în lipsa acestuia, de către Direcția de Sănătate Publică.
                        </li>
                        <li>Lista zonelor cu transmitere comunitară extinsă și a celor afectate se
                            actualizează de fiecare dată când este nevoie și poate fi consultată pe pagina
                            https://www.cnscbt.ro/ sub titulatura: „Lista zonelor cu transmitere comunitara
                            extinsa si a altor zone afectate de COVID 19”
                        </li>
                    </ul>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Dacă un membru al familiei este în
                        autoizolare, măsura se aplică și
                        pentru soț/soție sau copii?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>Autoizolarea se aplică tuturor membrilor familiei și persoanelor care
                            locuiesc la același domiciliu, pentru o perioadă de 14 zile de la data întoarcerii
                            din călătorie, respectiv de la data ultimului contact cu o persoană
                            simptomatică/confirmată.
                        </li>
                        <li>Toți au obligația de a NU părăsi domiciliul declarat, în care se află de la
                            momentul autoizolării.
                        </li>
                        <li>Dacă restul familiei nu dorește să intre în izolare alături de persoana care a
                            călătorit, atunci se solicită către Direcția de Sănătate Publică intrarea acesteia în
                            carantină instituționalizată. Această opțiune este posibilă numai în cazul în care
                            persoana NU a avut anterior contact cu familia!
                        </li>
                    </ul>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Ce măsuri de igienă individuală trebuie să
                        respecte persoanele
                        autoizolate?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>Să evite contactul apropiat cu celelalte persoane din locuință și, dacă este
                            posibil, să se izoleze într-o cameră separată.
                        </li>
                        <li>Să NU primească vizitatori în perioada de autoizolare la domiciliu.</li>
                        <li>Să se spele pe mâini cu apă și săpun, timp de cel puțin 20 de secunde, ori de
                            câte ori este necesar (după utilizarea toaletei, înaintea pregătirii mesei, etc).
                        </li>
                        <li>Să curățe și să dezinfecteze zilnic toate suprafețele pe care le ating frecvent
                            (ex: mese, clanțe, obiecte de mobilier, bateria/robinetele de la chiuveta, alte
                            obiecte care pot fi atinse și de alte persoane).
                        </li>
                        <li>Să își acopere gura și nasul cu șervețel de unică folosință sau cu o țesătură
                            atunci când strănută sau tușesc, sau să strănute și să tușească în plica cotului.
                            Batista se aruncă imediat la coșul de gunoi, în sac de plastic, după care se spală
                            pe mâini cu apă și săpun timp de 20 de secunde.
                        </li>
                        <li>Să aerisească cât mai bine toate încăperile casei. Spațiile comune ale casei
                            (bucătărie, baie) trebuie să fie bine aerisite!
                        </li>
                        <li>Să țină legătura zilnic cu medicul de familie și să-l informeze asupra
                            evoluției tuturor membrilor familiei.
                        </li>
                        <li>Să sune la numărul unic de urgență 112 în cazul în care apare cel puțin
                            unul din următoarele simptome: tuse, febră, dificultăți la respirație, durere în gât
                            – să își acopere nasul și gura cu o mască de protecție.
                        </li>
                        <li>De asemenea, persoanele se pot informa cu privire la noul coronavirus la
                            TELVERDE 0800 800 358. TELVERDE este pentru informare, nu este pentru
                            urgențe.
                        </li>
                    </ul>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Ce se întâmplă dacă vreun membru al familiei
                        prezintă simptome sau are
                        o altă urgență medicală în timp ce se află în autoizolare?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>În cazul în care, pe parcursul celor 14 zile, vreun membru al familiei
                            prezintă simptome sugestive pentru infecția cu coronavirus (febră, tuse,
                            dificultate în respirație) sau prezintă orice altă urgență medicală, contactați
                            medicul de familie și/sau sunați la 112. Menționați, obligatoriu, că vă aflați în
                            situația de autoizolare la domiciliu!
                        </li>
                        <li>Limitați cât mai mult posibil contactul apropiat – la mai puțin de 1 metru,
                            pentru mai mult de 15 minute – acoperiți-vă gura și nasul cu batistă când tușiți
                            sau strănutați! Spălați-vă pe mâini cu apă și săpun imediat, purtați mască de
                            protecție.
                        </li>
                        <li>Așteptați sosirea ambulanței, care vă va transporta până la centrul de boli
                            infecțioase cel mai apropiat, unde se poate efectua testarea pentru coronavirus.
                            Acolo veți fi izolat până la obținerea rezultatelor.
                        </li>
                        <li>Dacă rezultatul este negativ, veți fi adus înapoi la domiciliu și veți continua
                            autoizolarea până la 14 zile.
                        </li>
                        <li>Dacă rezultatele sunt pozitive, se vor aplica procedurile specifice pentru
                            cazurile de infecție cu coronavirus.
                        </li>
                        <li>Pentru alte urgențe medicale, personalul de la ambulanță / SMURD vor lua
                            deciziile ce se impun în acord cu reprezentanții DSP.
                        </li>
                    </ul>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Cum sunt sprijinite persoanele aflate în
                        autoizolare?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>Persoanele aflate în autoizolare pot fi ajutate în aprovizionarea cu apă și
                            alimente de către rude și/sau prieteni.
                        </li>
                        <li>Dacă este necesar, persoanele aflate în autoizolare pot solicita sprijinul
                            Comitetelor județene pentru situații de urgență și autorităților locale pentru
                            aprovizionare cu alimente, apă, măști de protecție.
                        </li>
                        <li>Autoritățile locale vor decide, de la caz la caz, modul de operare implicând
                            și organizațiile non-guvernamentale (ex: Crucea Roșie)
                        </li>
                    </ul>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Cum ajung alimentele și bunurile necesare la
                        persoanele aflate în
                        autoizolare?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>Alimentele și bunurile necesare sunt aduse la domiciliul persoanelor aflate
                            în autoizolare.
                        </li>
                        <li>Persoanele autoizolate le vor prelua fără a intra în contact cu personalul care
                            face aprovizionarea, păstrând o distanță de minimum 2 metri față de acesta.
                        </li>
                        <li>Practic, alimentele și bunurile sunt lăsate la intrarea în domiciliu (ușa
                            apartamentului/poarta casei) și sunt preluate de către persoana aflată în izolare
                            doar după ce cealaltă persoană s-a retras.
                        </li>
                        <li>Este recomandat ca atenționarea asupra furnizării alimentelor sau produselor
                            să se facă pe cale telefonică, și nu prin atingerea ușii/clanței/soneriei.
                        </li>
                        <li>Pe cât posibil, persoanele autoizolate vor purta masca de protecție care le va
                            acoperi nasul și gura (masca medicală cu elastic prins în spatele urechilor) atunci
                            când preiau produsele/bunurile primite la domiciliu.
                        </li>
                    </ul>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>După perioada de 14 zile, persoanele aflate
                        în autoizolare pot părăsi
                        domiciliul?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>Persoanele care au sosit din alte zone decât cele care necesită carantinare pot
                            părăsi domiciliul numai după cele 14 zile de autoizolare, dacă nu prezintă niciun
                            simptom. În aceste cazuri, NU este necesară testarea pentru coronavirus.
                        </li>
                        <li>Persoanele care au intrat în contact direct cu caz confirmat cu COVID-19
                            vor fi testate în prima zi de autoizolare și înaintea terminării perioadei de
                            autoizolare. Pot părăsi domiciliul numai dacă rezultatele finale sunt negative.
                        </li>
                        <li>Persoanele aflate în autoizolare vor primi la finalul celor 14 zile de
                            autoizolare aviz epidemiologic de la DSP, care să ateste că pot reveni în
                            colectivitate.
                        </li>
                        <li>La ieșirea din autoizolare, mergeți în consult la medicul de familie pentru a
                            vă elibera concediul medical și/sau adeverințele pentru școală.
                        </li>
                        <li>Rămâneți vigilenți și respectați în continuare recomandările generale privind
                            prevenirea infecției cu coronavirus sau alt tip de gripă.
                        </li>
                    </ul>
                </Content>
                <Content type={'a'}>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Aceste persoane beneficiază de scutiri sau
                        concedii medicale?</h1>
                    <ul style={{padding: '20px'}}>
                        <li>În primul rând, este important să contactați angajatorul și/sau unitatea de
                            învățământ pentru a-i înștiința că vă aflați în autoizolare la domiciliu.
                        </li>
                        <li>La finalul perioadei de autoizolare, elevii și studenții beneficiază de scutire
                            medicală, iar persoanele angajate, de concediu medical.
                        </li>
                        <li>Concediul medical va fi eliberat de către medicul de familie, după ieșirea din
                            izolare, în baza certificatului DSP, nemaifiind nevoie de adeverință de la
                            angajator.
                        </li>
                        <li>Conform prevederilor OUG 158/2005 și art. 60 (2) din Normele de aplicare,
                            în cazul concediilor medicale pentru carantină, angajatul nu este obligat să
                            depună la angajator certificatul pentru luna anterioară până în data de 5 a lunii în
                            curs, ci până la sfârșitul lunii în curs. Astfel, angajatul poate depune certificatul
                            pentru concediul medical după ieșirea din izolare/carantină.
                        </li>
                        <li>Cuantumul brut lunar al indemnizației pentru carantină reprezintă 75% din
                            baza de calcul, la fel ca în cazul concediilor medicale acordate pentru o boală
                            obișnuită.
                        </li>
                        <li>Durata concediilor pentru carantină nu diminuează numărul zilelor de
                            concediu medical acordate unui asigurat pentru celelalte afecțiuni și nu se aplică
                            restricția de 10 zile valabilă pentru concediul și indemnizația pentru incapacitate
                            temporară de muncă, cauzată de boli obișnuite sau de accidente în afara muncii.
                        </li>
                    </ul>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article8;