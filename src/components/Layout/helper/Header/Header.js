import React from "react";

import Auxilliary from "../../../../hoc/Auxilliary";
import '../layout.css'
import logo from "../../../../images/logo-hotel.png";

const Header = (props) => {

    let showProfile;
    if(!props.isLogin){
        showProfile = (
            <Auxilliary>
                <li><a href="Home">Home</a></li>
                <li><a href="About Us">About Us</a></li>
                <li><a href="Gallery">Gallery</a></li>
                <li><a href="Reservation">Reservation</a></li>
                <li><a href="Contact Us">Contact Us</a></li>
                <li><a href="Sign Up">Sign Up</a></li>
                <li><a href="Login">Login</a></li>
            </Auxilliary>
        )
    }
    else{
        showProfile = (
            <Auxilliary>
                <li><a href="Home">Home</a></li>
                <li><a href="About Us">About Us</a></li>
                <li><a href="Gallery">Gallery</a></li>
                <li><a href="Reservation">Reservation</a></li>
                <li><a href="Contact Us">Contact Us</a></li>
                <li><a href="Username">Username: {props.username}</a></li>
            </Auxilliary>
        )
    }

    return (
        <div className="header row m-0">
            <div className="container row mx-auto
                    justify-content-between
                    align-items-center
                    py-2">
                <div className="left-nav col-2 px-0">
                    <img
                        className="logo-hotel"
                        alt="logo"
                        src={logo}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="right-nav col">
                    <nav className="navbar navbar-inverse justify-content-end">
                        <ul className="nav navbar-nav flex-row nav-menu">
                            {showProfile}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
