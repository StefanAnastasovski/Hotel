import React, {Component} from "react";

import Aux from "../../hoc/Auxilliary";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";


class Layout extends Component {

    //test login
    state = {
        isLogin: true,
        username: 'Stefan',
        footerPosition: ''
    };

    render() {
    console.log(this.props);

        return (
            <Aux>
                <Header isLogin={this.state.isLogin} username={this.state.username}/>
                <Main componentName={this.props.componentName}/>
                <Footer positionFooter = {this.props.positionFooter}/>
            </Aux>
        )
    }

};

export default Layout;
