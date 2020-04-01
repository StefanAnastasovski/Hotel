import React, {Component} from "react";


import DatePicker from "react-datepicker";

import './SignUp.css';

class SignUp extends Component {

    state = {
        gender: 'male',
        birthDate: new Date(),
    };


    onRadioChange = (e) => {
        this.setState({
            gender: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.gender);
    };

    birthDateHandle = date => {
        this.setState({
            birthDate: date
        });
    };

    render() {

        const styleInputField = {
            borderRadius: '10px',
            padding: '5px 3px',
            border: '1px solid grey',

        };

        const styleButton = {
            backgroundColor: '#0c5460',
            borderRadius: "10px",
            padding: '15px 35px',
            border: 0,
            color: 'white'
        };

        const styleHeader = {
            color: '#0c5460'
        };

        return (

            <div className="signup row">

                <div className="col">

                    <div className="container">

                        <div className="row">

                            <div className="col my-3">
                                <h1 className="text-center" style={styleHeader}>Create a New Account</h1>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col">

                                <div className="w-50 m-auto">

                                    <form method="POST" onSubmit={this.onSubmit}>

                                        <div className="row ">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    First Name:
                                                    <input type="text" className="new-line w-100 px-2"
                                                           name="su-firstname"
                                                           required style={styleInputField}/>
                                                </label>

                                            </div>

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    Last Name:
                                                    <input type="text" className="new-line w-100 px-2"
                                                           name="su-lastname"
                                                           required style={styleInputField}/>
                                                </label>

                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    Email:
                                                    <input type="email" className="new-line w-100 px-2" name="su-email"
                                                           required style={styleInputField}
                                                           placeholder="name@example.com"/>
                                                </label>

                                            </div>

                                        </div>

                                          <div className="row">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    Username:
                                                    <input type="username" className="new-line w-100 px-2"
                                                           name="su-username"
                                                           required style={styleInputField} placeholder="Username"/>
                                                </label>

                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    Password:
                                                    <input type="password" className="new-line w-100 px-2"
                                                           name="su-password"
                                                           required style={styleInputField} placeholder="Password"/>
                                                </label>

                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col">

                                                <div className="">
                                                    <label>Gender</label>
                                                </div>

                                                <div className="d-flex">

                                                    <div className="col">

                                                        <label>
                                                            <input
                                                                type="radio"
                                                                value="male"
                                                                checked={this.state.gender === "male"}
                                                                onChange={this.onRadioChange}
                                                            />
                                                            Male
                                                        </label>

                                                    </div>

                                                    <div className="col">

                                                        <label>
                                                            <input
                                                                type="radio"
                                                                value="female"
                                                                checked={this.state.gender === "female"}
                                                                onChange={this.onRadioChange}
                                                            />
                                                            Female
                                                        </label>

                                                    </div>

                                                </div>

                                                <div className="row">

                                                    <div className="col">

                                                        <label className="w-100">
                                                            <span className="new-line">Birthday:</span>
                                                            <DatePicker
                                                                selected={this.state.birthDate}
                                                                onChange={this.birthDateHandle}
                                                            />
                                                        </label>

                                                    </div>

                                                </div>

                                                <button
                                                    type="submit"
                                                    className="my-3"
                                                    name = "signup"
                                                    style={styleButton}>
                                                    Sign Up
                                                </button>

                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        );

    }

}

export default SignUp;


