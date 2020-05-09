import React from "react";
import Start from "./Start";
import Content from "./Content";
import Footer from "./Footer";

class Article13 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Start description={'3 Martie 2020'}>Cinci dosare penale, deschise în urma coronavirusului</Start>
                <Content type={'a'}>
                    <p>Cinci dosare penale s-au deschis cu privire la românii care au minţit sau care
                        nu au vrut să se supună măsurilor luate de autorităţi cu privire la coronavirus .
                        Cei care nu s-au supus măsurilor au dosar penal pentru zădărnicirea
                        combaterii bolilor.
                    </p>
                    <p>Cauze penale pentru răspândirea CoViD-19:
                        <ul style={{padding: '20px'}}>
                            <li> Un dosar penal pe rolul Parchetului de pe lângă Judecătoria Râmnicu
                                Vâlcea, sub aspectul săvârșirii infracțiunii de zădărnicirea combaterii bolilor,
                                prev. de art. 352 Cod penal;
                            </li>
                            <li> Un dosar penal pe rolul Parchetului de pe lângă Judecătoria Bălcești, sub
                                aspectul săvârșirii infracțiunii de zădărnicirea combaterii bolilor, prev. de art.
                                352 Cod penal;
                            </li>
                            <li> Un dosar penal pe rolul Parchetului de pe lângă Judecătoria Slatina, sub
                                aspectul săvârșirii infracțiunii de zădărnicirea combaterii bolilor, prev. de art.
                                352 Cod penal;
                            </li>
                            <li> Un dosar penal pe rolul Parchetului de pe lângă Judecătoria Jibou, sub
                                aspectul săvârșirii infracțiunii de zădărnicirea combaterii bolilor, prev. de art.
                                352 Cod penal, în care la data de 27 februarie 2020 s-a dispus schimbarea
                                încadrării juridice în infracţiunea de fals în declaraţii, prev. de art. 326 Cod
                                penal;
                            </li>
                            <li> Un dosar penal pe rolul Parchetului de pe lângă Judecătoria Târgu Jiu, sub
                                aspectul săvârșirii infracțiunii de neglijență în serviciu, prev. de art. 298 alin. 1
                                Cod penal
                            </li>
                        </ul>
                    </p>
                    <p>Pe rolul Judecătoriei Piatra Neamț a fost înregistrat, de asemenea, un dosar
                        penal având ca obiect săvârșirea infracțiunii de zădărnicirea combaterii bolilor,
                        prev. de art. 352 alin. 1 Cod penal, care a fost clasat, prin ordonanță, la data de
                        28 februarie 2020, în temeiul art. 16 lit. a din Codul de procedură penală.
                    </p><p>În cazul de la Râmnicu Vâlcea vorbim despre 6 chinezi puși să stea la
                    izlolare, aceștia încălcând izolarea, făcând o plimbare din județul Gorj, până în
                    Râmnicu Vâlcea, unde le-a și fost întocmit dosar penal.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Article13;