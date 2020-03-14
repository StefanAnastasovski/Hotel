import React from "react";

import '../Layout/layout.css'
import Aux from "../../hoc/Auxilliary";

import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import Reservation from "../Reservation/Reservation"

const Main = (props) => {

    let component = {};
    let compName = props.componentName;

    if (compName) {
        if (compName === 'home')
            component = <Home />;

        else if (compName === 'aboutus')
            component = <AboutUs />;
        else if (compName === 'contactus')
            component = <ContactUs />;
        else if (compName === 'gallery')
            component = <Gallery />;
        else if (compName === 'reservation')
            component = <Reservation />;

    }

    return (
        <Aux>
            {component}
        </Aux>
    )

};

export default Main;