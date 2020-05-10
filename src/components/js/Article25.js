import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article25 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'20 Martie 2020'}>Crește numărul pacienților aflați în stare critică</Start>
                <Content type={'a'}>
                    <p>Grupul de Comunicare Strategică anunță că în data de 20 martie, pe teritoriul României, au fost
                        confirmate 308 cazuri de persoane infectate cu virusul COVID – 19 (coronavirus). Dintre cele 308
                        de persoane confirmate pozitiv, 31 au fost declarate vindecate și externate (22 la Timișoara, 8
                        la București și unul la Iași). Crește numărul persoanelor aflate la terapie intensivă, precum și
                        cel al persoanelor aflate în izolare. În ultimele 24 de ore s-a dublat numărul persoanelor
                        testate pentru coronavirus.
                    </p><p>De la ultima informare transmisă de Grupul de Comunicare Strategică, au fost înregistrate
                    alte 31 de noi cazuri de îmbolnăvire.
                </p><p>Pacienții nou confirmați au vârsta cuprinsă între 17 ani și 89 de ani.
                </p><p>La ATI, în acest moment, sunt internați 11 pacienți, din care doi în stare gravă. Starea de
                    sănătate a celorlalți pacienților este bună, staționară.
                </p><p>Pe teritoriul României, în carantină instituționalizată sunt 4.044 de persoane pentru care se
                    efectuează verificări pentru a depista dacă au contactat virusul COVID – 19 (coronavirus). Alte
                    45.432 de persoane sunt în izolare la domiciliu și se află sub monitorizare medicală.
                </p><p>Până la această dată, la nivel național, au fost prelucrate 8.284 de teste, din care 40 în
                    unități medicale private. Dintre acestea, 7.976 au fost cu rezultat negativ, adică persoanele de la
                    care au fost prelevate mostrele analizate nu sunt infectate cu COVID-19.
                </p><p>În ultimele 24 de ore, au fost înregistrate 1.604 apeluri la numărul unic de urgență 112 și 4.950
                    la linia TELVERDE (0800 800 358), deschisă special pentru informarea cetățenilor.
                </p><p>Până în prezent, prin structurile abilitate ale MAI au fost întocmite 98 de dosare penale, sub
                    aspectul săvârșirii infracțiunii de zădărnicirea combaterii bolilor, faptă prevăzută şi pedepsită de
                    art. 352 alin. 1 Cod Penal.
                </p></Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article25;