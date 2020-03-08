import React, {useState} from 'react';

import Aux from "../../hoc/Auxilliary";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

        <Aux>

            <div className="contact-us row">

                <div className="col">

                    <div className="container d-flex my-5">

                        <div className="col-5 align-self-center">


                            <div className="">

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


                        </div>

                        <div className="col-7 p-0">

                            <h1>
                                Contact Us
                            </h1>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                <Form.Row>

                                    <div className="w-50">

                                        <Form.Group controlId="validationCustom01">

                                            <Form.Label>First name</Form.Label>

                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                            />

                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                        </Form.Group>

                                    </div>

                                    <div className="w-50">

                                        <Form.Group controlId="validationCustom02">

                                            <Form.Label>Last name</Form.Label>

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

                                    <Form.Label>Email address</Form.Label>

                                    <Form.Control type="email" placeholder="name@example.com"/>

                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">

                                    <Form.Label>Enter ...</Form.Label>

                                    <Form.Control as="textarea" rows="3"/>

                                </Form.Group>

                                <Button type="submit">Submit form</Button>

                            </Form>

                        </div>


                    </div>

                </div>

            </div>

        </Aux>
    )
};

export default ContactUs;