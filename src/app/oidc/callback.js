import React from 'react';
//import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {
    useHistory,useLocation
} from "react-router-dom";
import { CallbackComponent } from 'redux-oidc';
import {userManager} from './userManager'

function MyCallbackPage () {
    let history = useHistory();
    let location=useLocation();

    
      //  let location = useLocation();
  // define a success callback which receives the signed in user & handles redirection
  // NOTE: this example uses react-router-redux, 
  // but any other routing library should work the same
  const successCallback = (user) => {
    // the user object gets the browser's URL before 
    // redirection was triggered passed into its state
    // when triggerAuthFlow is set to `true`
   // console.log("hhhh",location.state)
  //  const urlBeforeRedirection = user.state.redirectUrl;
   // this.props.dispatch(push(urlBeforeRedirection));
  // let { from } = location.state || { from: { pathname: "/" } };
 history.replace(window.localStorage.getItem('referrer'));
  };


  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={successCallback}
      errorCallback={error => {
        history.replace("/");
        console.error(error);
      }}
      >
      <div>Redirecting...</div>
    </CallbackComponent>
  );

}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(MyCallbackPage);