import jwt_decode from "jwt-decode";



const checkTokenExpirationMiddleware = store => next => action => {
    const token =
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user"))["token"];
    if (jwt_decode(token).exp < Date.now() / 1000) {
      next(action);
      localStorage.clear();
    }
    next(action);
  };

  export default checkTokenExpirationMiddleware;