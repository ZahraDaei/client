//import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { OidcProvider } from 'redux-oidc';
import App from "./App";
import configureStore from "./app/store";
import "./index.css";
import {userManager} from "./app/oidc/userManager";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Create an enhanced history that syncs navigation events with the store

//import registerServiceWorker from './registerServiceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const container = document.getElementById("root");
// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
store.dispatch({type: 'INIT_APP'});

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OidcProvider>
  </Provider>
);

// Uncomment the line above that imports the registerServiceWorker function
// and the line below to register the generated service worker.
// By default create-react-app includes a service worker to improve the
// performance of the application by caching static assets. This service
// worker can interfere with the Identity UI, so it is
// disabled by default when Identity is being used.
//
//registerServiceWorker();
