import React from "react";

import '../layout.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
    return (
        <div className="footer row m-0">
            <div className="container pt-4">
                <div className="row m-0">
                    <div className="col">
                        <ul className="nav navbar-nav  nav-menu">
                            <li><a href="Home">Home</a></li>
                            <li><a href="About Us">About Us</a></li>
                            <li><a href="Gallery">Gallery</a></li>
                            <li><a href="Reservation">Reservation</a></li>
                            <li><a href="Contact Us">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="nav navbar-nav flex-row justify-content-end nav-menu">
                            <li><a href="http://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebook} className="fa-2x">facebook</FontAwesomeIcon>
                            </a></li>
                            <li><a href="https://www.instagram.com/">
                                <FontAwesomeIcon icon={faInstagram} className="fa-2x" >instagram</FontAwesomeIcon>
                            </a></li>
                            <li><a href="http://www.twitter.com/">
                                <FontAwesomeIcon icon={faTwitter} className="fa-2x">facebook</FontAwesomeIcon>
                            </a></li>
                            <li><a href="https://www.gmail.com/">
                                <FontAwesomeIcon icon={faMailBulk} className="fa-2x">facebook</FontAwesomeIcon>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="row m-0 mt-2 text-center">
                    <p className="text-center w-100">
                        © 2020 Stefan Hotel. All rights reserved.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
