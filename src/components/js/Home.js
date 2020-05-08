import React from "react";
import "./HomeStart"
import "./CardHolder"
import HomeStart from "./HomeStart";
import Content from "./Content";
import Footer from "./Footer";

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <HomeStart/>
                <Content type={'a'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae velit elit. Nunc volutpat
                        dui sed justo tristique, sit amet molestie sapien elementum. Nunc quam libero, efficitur eu
                        porta ut, convallis a orci. Vivamus at egestas nunc. Cras id nulla consequat, elementum lectus
                        sed, finibus urna. Aliquam vitae maximus purus. Donec imperdiet eleifend magna sit amet
                        suscipit.</p>
                    <p>Nullam at varius mauris. Phasellus bibendum condimentum dolor vel laoreet. Pellentesque at
                        aliquam nunc. Donec porta risus mi. Mauris suscipit, justo eu commodo volutpat, tellus velit
                        blandit massa, at tristique quam eros sed libero. Donec varius eros sed turpis tincidunt, at
                        ornare lacus aliquam. Vestibulum molestie sit amet justo vel vehicula.</p>
                    <p>Etiam porta efficitur nunc, auctor pretium enim cursus id. Nulla nunc nulla, egestas porta libero
                        pellentesque, interdum vestibulum sapien. Etiam rutrum mauris dictum dolor facilisis, vel
                        ultrices risus iaculis. Maecenas hendrerit iaculis nisi, quis dictum augue vehicula consectetur.
                        Donec id erat id elit consequat mattis sed rutrum purus. Maecenas et dictum erat. Cras quis
                        mollis turpis, eget maximus felis.</p>
                </Content>
                <Content type={'a'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae velit elit. Nunc volutpat
                        dui sed justo tristique, sit amet molestie sapien elementum. Nunc quam libero, efficitur eu
                        porta ut, convallis a orci. Vivamus at egestas nunc. Cras id nulla consequat, elementum lectus
                        sed, finibus urna. Aliquam vitae maximus purus. Donec imperdiet eleifend magna sit amet
                        suscipit.</p>
                    <p>Nullam at varius mauris. Phasellus bibendum condimentum dolor vel laoreet. Pellentesque at
                        aliquam nunc. Donec porta risus mi. Mauris suscipit, justo eu commodo volutpat, tellus velit
                        blandit massa, at tristique quam eros sed libero. Donec varius eros sed turpis tincidunt, at
                        ornare lacus aliquam. Vestibulum molestie sit amet justo vel vehicula.</p>
                    <p>Etiam porta efficitur nunc, auctor pretium enim cursus id. Nulla nunc nulla, egestas porta libero
                        pellentesque, interdum vestibulum sapien. Etiam rutrum mauris dictum dolor facilisis, vel
                        ultrices risus iaculis. Maecenas hendrerit iaculis nisi, quis dictum augue vehicula consectetur.
                        Donec id erat id elit consequat mattis sed rutrum purus. Maecenas et dictum erat. Cras quis
                        mollis turpis, eget maximus felis.</p>
                </Content>
                <Content type={'a'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae velit elit. Nunc volutpat
                        dui sed justo tristique, sit amet molestie sapien elementum. Nunc quam libero, efficitur eu
                        porta ut, convallis a orci. Vivamus at egestas nunc. Cras id nulla consequat, elementum lectus
                        sed, finibus urna. Aliquam vitae maximus purus. Donec imperdiet eleifend magna sit amet
                        suscipit.</p>
                    <p>Nullam at varius mauris. Phasellus bibendum condimentum dolor vel laoreet. Pellentesque at
                        aliquam nunc. Donec porta risus mi. Mauris suscipit, justo eu commodo volutpat, tellus velit
                        blandit massa, at tristique quam eros sed libero. Donec varius eros sed turpis tincidunt, at
                        ornare lacus aliquam. Vestibulum molestie sit amet justo vel vehicula.</p>
                    <p>Etiam porta efficitur nunc, auctor pretium enim cursus id. Nulla nunc nulla, egestas porta libero
                        pellentesque, interdum vestibulum sapien. Etiam rutrum mauris dictum dolor facilisis, vel
                        ultrices risus iaculis. Maecenas hendrerit iaculis nisi, quis dictum augue vehicula consectetur.
                        Donec id erat id elit consequat mattis sed rutrum purus. Maecenas et dictum erat. Cras quis
                        mollis turpis, eget maximus felis.</p>
                </Content>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;