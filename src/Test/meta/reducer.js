const initialState = {
   messageTest:null
  }
  
  export default function appTestReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_MESSAGE_TEST_SUCCESS': {
        return Object.assign({}, state, {
          messageTest: action.payload
        })
      }
     
      default:
        return state
    }
  }