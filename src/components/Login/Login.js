import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Login extends Component {

    state = {
        redirect: false
    };

    setRedirectHandler = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirectHandler = () => {
        if (this.state.redirect) {
            return <Redirect to='/Sign Up'/>
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
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

            <div className="login row">

                <div className="col">

                    <div className="container">

                        <div className="row">

                            <div className="col my-3">
                                <h1 className="text-center" style={styleHeader}>Log In</h1>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col">

                                <div className="w-50 m-auto">

                                    <form method="POST" onSubmit={this.onSubmit}>

                                        <div className="row ">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    Username:
                                                    <input type="text" className="new-line w-100 px-2"
                                                           name="login-username"
                                                           required style={styleInputField}/>
                                                </label>

                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    Password:
                                                    <input type="password" className="new-line w-100 px-2"
                                                           name="su-password"
                                                           required style={styleInputField} placeholder="password"/>
                                                </label>

                                            </div>

                                        </div>


                                        <button type="submit"
                                                className="my-3"
                                                style={styleButton}
                                                name="login">
                                            Login
                                        </button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col my-3 text-center">

                                <h3 style={styleHeader}>
                                    If you do not have an account,
                                    <span className="new-line">
                                        please click on the button to create one:
                                    </span>
                                </h3>

                                {this.renderRedirectHandler()}

                                <input
                                    className="w-50 m-auto"
                                    type="button"
                                    value="Sign Up"
                                    onClick={this.setRedirectHandler}
                                    style={styleButton}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Login;