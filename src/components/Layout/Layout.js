import React, {Component} from "react";

import Aux from "../../hoc/Auxilliary";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

import './Layout.css';

class Layout extends Component {

    //test login
    state = {
        isLogin: true,
        username: 'Stefan',
        footerPosition: '',
        firstName: 'stefan',
        lastName: 'anas',
        email: 'tralala@gmail.com',
        gender: 'male',
        birthday: '10.02.1886',
    };


    render() {
        console.log(this.props);
        var username = this.state.username;
        var  obj = {
         firstName : this.state.firstName,
        lastName : this.state.lastName,
        email: this.state.email,
        gender: this.state.gender,
        birthday: this.state.birthday,
        username: this.state.username,
    };
        return (
            <Aux>
                <Header isLogin={this.state.isLogin} username={username}/>
                <Main componentName={this.props.componentName}
                      username={username}
                        obj={obj}
            />
        <Footer positionFooter={this.props.positionFooter}/>
    </Aux>
    )
    }

};

export default Layout;
