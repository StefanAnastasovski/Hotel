import React, {useState} from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import './ContactUs.css';

const ContactUs = (props) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (

        <div className="contact-us row">

            <div className="col">

                <div className="container">

                    <div className="contact-us-main">
                        <div className="contact-us-title">
                            <h1 className="text-center text-color-title">
                                Contact Us
                            </h1>
                        </div>

                        <div className="d-flex py-5">

                            <div className="contact-us-hotel-info col-5 align-self-center">

                                <h1>Stefan Hotel, Miami</h1>

                                <ul>

                                    <li>
                                        455 Grand Bay Dr.

                                    </li>

                                    <li>
                                        Miami, FL 33149 United States

                                    </li>

                                    <li>
                                        Phone: +13053654500

                                    </li>

                                    <li>
                                        via Email
                                    </li>

                                </ul>

                            </div>

                            <div className="col-7 p-0">

                                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                    <Form.Row>

                                        <div className="col mr-1">

                                            <Form.Group controlId="validationCustom01">

                                                <Form.Label className="font-weight-bold">First name:</Form.Label>

                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First name"
                                                />

                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                            </Form.Group>

                                        </div>

                                        <div className="col ml-1">

                                            <Form.Group controlId="validationCustom02">

                                                <Form.Label className="font-weight-bold">Last name:</Form.Label>

                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last name"
                                                />

                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                            </Form.Group>

                                        </div>


                                    </Form.Row>


                                    <Form.Group controlId="exampleForm.ControlInput1">

                                        <Form.Label className="font-weight-bold">Email:</Form.Label>

                                        <Form.Control type="email" placeholder="name@example.com"/>

                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">

                                        <Form.Label className="font-weight-bold">Enter ...</Form.Label>

                                        <Form.Control as="textarea" rows="3"/>

                                    </Form.Group>

                                    <Button type="submit">Submit form</Button>

                                </Form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
};

export default ContactUs;