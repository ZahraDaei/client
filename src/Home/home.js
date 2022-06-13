import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {userManager} from "../app/oidc/userManager";


const Home = ({getMessage,message,user}) => {
  useEffect(() => {
    console.log("user.id_token",user.id_token)
    getMessage(user);
  }, [])

const exit=()=>{
  
  userManager.signoutRedirect();
}
  
  return (
    <>
    <div>home {message}</div>
    <button onClick={exit}>خروج</button>
    </>
  )
}

Home.propTypes = {}

export default Home