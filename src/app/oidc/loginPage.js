import React  ,{useEffect} from "react";
import {userManager} from "./userManager";

function LoginPage (props){
  const onLoginButtonClick=(event)=> {
    window.localStorage.setItem('referrer', window.location.pathname);

    event.preventDefault();
       

    userManager.signinRedirect();
  }

 
    return (
      <div style={styles.root}>
        
        <button style={{marginTop:"200px"}} onClick={onLoginButtonClick}>ورود</button>
      </div>
    );
  
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 1
  }
};

export default LoginPage;