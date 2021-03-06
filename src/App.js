import React, { useEffect } from "react";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import { Route } from 'react-router';
import "./App.css";
//import './custom.css';
import Home from "./Home";
import HomePage from "./homePage";
import Test from "./Test";
import { Route, Switch } from "react-router-dom";
import MyCallbackPage from './app/oidc/callback'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function App() {


    return (
       
        <Switch>
          <Route  path="/dg" component={HomePage } />

          <Route path="/callback" component={MyCallbackPage } />
 
        </Switch>
   
     
    );
  
}
