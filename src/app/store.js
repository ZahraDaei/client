import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import thunkMiddleware from 'redux-thunk'
import { watchGetMessageAsync } from "../Home/meta/saga"
import { watchGetMessageTestAsync } from "../Test/meta/saga"
import monitorReducersEnhancer from './enhancers/monitorReducers'
import rootReducer from './reducers'
import createOidcMiddleware from 'redux-oidc';
import {userManager} from "./oidc/userManager"
import checkTokenExpirationMiddleware from "./middleware/checkTokenExpirationMiddleware "




// create the middleware
//const oidcMiddleware = createOidcMiddleware(userManager, () => true, false, '/callback');






export function* mainSaga(getState) {
    yield all([watchGetMessageAsync(),watchGetMessageTestAsync()])

}

export default function configureStore(history, initialState) {

    const sagaMiddleware = createSagaMiddleware()
      const oidcMiddleware = createOidcMiddleware(userManager);


    //const middlewares = [loggerMiddleware, thunkMiddleware, sagaMiddleware]
    const middlewares = [ thunkMiddleware,sagaMiddleware, oidcMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, initialState, composedEnhancers)
    sagaMiddleware.run(mainSaga);
    //checkTokenExpirationMiddleware(store);

  return store
}