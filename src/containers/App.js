import React, {Component} from 'react';

import './App.css';
import Layout from "../components/Layout/Layout";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Aux from "../hoc/Auxilliary";

class App extends Component {


    //positionFooterAbsoltue is true when page havent scroll, otherwise  is false
    render() {

        return (

            <Aux>

                <div className="layout-container col px-0">

                    <Router>

                        <Switch>
                            <Route exact path="/">
                                <Redirect from="/" to="/Home"/>
                            </Route>

                            <Route exact path="/Home">
                                <Layout positionFooter={false} componentName={'home'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/About Us">
                                <Layout positionFooter={true} componentName={'aboutus'}/>
                            </Route>


                        </Switch>

                        <Switch>
                            <Route exact path="/Contact Us">
                                <Layout componentName={'contactus'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Gallery">
                                <Layout positionFooter={false} componentName={'gallery'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Reservation">
                                <Layout positionFooter={false} componentName={'reservation'}/>
                            </Route>
                        </Switch>

                        {/*<Switch>*/}
                        {/*    <Route exact path="/">*/}
                        {/*        <Layout positionFooter={this.state.positionFooterAbsolute} componentName={'home'}/>*/}
                        {/*    </Route>*/}
                        {/*</Switch>*/}

                        {/*<Switch>*/}
                        {/*    <Route exact path="/">*/}
                        {/*        <Layout positionFooter={this.state.positionFooterAbsolute} componentName={'home'}/>*/}
                        {/*    </Route>*/}
                        {/*</Switch>*/}

                        {/*<Switch>*/}
                        {/*    <Route exact path="/">*/}
                        {/*        <Layout positionFooter={this.state.positionFooterAbsolute} componentName={'home'}/>*/}
                        {/*    </Route>*/}
                        {/*</Switch>*/}


                    </Router>

                </div>

            </Aux>

        )
            ;
    }
}

export default App;
