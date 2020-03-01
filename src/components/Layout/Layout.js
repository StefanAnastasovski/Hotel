import React, {Component} from "react";

import Auxilliary from "../../hoc/Auxilliary";
import Header from "./helper/Header/Header";
import Footer from "./helper/Footer/Footer";
import Main from "./helper/Main/Main";


class Layout  extends Component{

    //test login
    state = {
        isLogin: true,
        username: 'Stefan'
    };

    render() {
        return(
            <Auxilliary>
                <Header isLogin = {this.state.isLogin} username = {this.state.username}/>
                <Main/>
                <Footer />
            </Auxilliary>
        )
    }

};

export default Layout;
