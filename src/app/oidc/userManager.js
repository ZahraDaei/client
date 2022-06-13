import { createUserManager } from 'redux-oidc';


// user manager configuration object, see oidc-client-js documentation for details
const config = {
    client_id: 'react-client',
    redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/callback`,
    response_type: 'code',
    scope: 'openid profile api1',
    authority: 'https://localhost:5001',
    post_logout_redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/dg/home`,
    silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/silent_renew.html`,
    automaticSilentRenew: false,
    filterProtocolClaims: true,
    loadUserInfo: true,triggerAuthFlow :true
  }
  

  // create a user manager instance
  export const userManager = createUserManager(config);