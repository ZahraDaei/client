import React, { Component } from "react";
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


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
    
        <Switch>
          <Route path="/dg/home" component={Home } />
          <Route path="/dg/test" component={Test } />
        </Switch>
     
    );
  }
}
