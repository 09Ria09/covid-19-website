import React from "react";
import "./HomeStart"
import "./CardHolder"
import HomeStart from "./HomeStart";
import Footer from "./Footer";
import CardHolder from "./CardHolder";

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <HomeStart/>
                <CardHolder/>
                <Footer style={{scrollSnapAlign:'unset'}}/>
            </React.Fragment>
        );
    }
}

export default Home;