import React from "react";

import '../Layout/layout.css'
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Aux from "../../hoc/Auxilliary";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Main = (props) => {

    let component = {};
    let compName = props.componentName;

    if(compName){
        if(compName === 'home')
            component = <Home />;

        else if(compName === 'aboutus')
            component = <AboutUs />;
        else if (compName === 'contactus')
            component = <ContactUs />;


    }

    return (
        <Aux>
            {component}
        </Aux>
    )

};

export default Main;