import Test from "./test"
import {getMessageTest} from "./meta/action"
import { connect } from 'react-redux'


const actionCreators = {
  getMessageTest
  }
const mapStateToProps=(state)=> ({
   message:state.appTest.messageTest
  })
  
  export default connect(mapStateToProps,actionCreators)(Test)