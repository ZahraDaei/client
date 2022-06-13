import { combineReducers } from "redux";
import { reducer } from 'redux-oidc';
import appReducer from "../Home/meta/reducer";
import appTestReducer from "../Test/meta/reducer";



const rootReducer = combineReducers({
  appTest: appTestReducer,
  app: appReducer,
  oidc: reducer,

});
export default rootReducer;
