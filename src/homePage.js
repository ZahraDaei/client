import React from "react";
import { connect } from "react-redux";
import LoginPage from "./app/oidc/loginPage";
import Signout from "./app/oidc/Signout";
import Main from "./main";

function HomePage(props) {
  const { user } = props;
console.log("props",props)
  return !user ? <LoginPage  /> : user.expired ?Signout():<Main />;
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);