import React from 'react';
import Layout from '../layout/layout';
import Signup from '../Signup/signup';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
// import Components from "views/Components/Components.js";

import LandingPage from "../LandingPage/LandingPage.js";
// import Secondarypage from '../secondarypage/secondarypage';


const Routersection=(props)=>{
    
    return (
        <React.Fragment>
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={LandingPage} />
          <Layout >
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Layout>
        </Switch>
        </BrowserRouter>
        </React.Fragment>
    );
}

export default Routersection;