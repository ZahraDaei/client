import * as types from "./types"

export const getMessage=(user)=>dispatch=>{
 return dispatch({type:types.GET_MESSAGE_START,payload:user})
}