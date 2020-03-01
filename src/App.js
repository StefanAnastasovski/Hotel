import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/Home";
import Layout from "./components/Layout/Layout";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    render() {
        return (
            <div className="layout-container col px-0">
                <Layout>
                    <Home />
                </Layout>
            </div>

            // <React.Fragment>
            //     <Router>
            //         <Switch>
            //             <Route exact path = "/" component = {Home}/>
            //         </Switch>
            //     </Router>
            // </React.Fragment>
        );
    }
}

export default App;
