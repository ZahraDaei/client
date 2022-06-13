const initialState = {
   message:null
  }
  
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_MESSAGE_SUCCESS': {
        return Object.assign({}, state, {
            message: action.payload
        })
      }
     
      default:
        return state
    }
  }