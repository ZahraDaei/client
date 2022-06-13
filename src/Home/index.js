import Home from "./home"
import {getMessage} from "./meta/action"
import { connect } from 'react-redux'


const actionCreators = {
    getMessage
  }
const mapStateToProps=(state)=> ({
   message:state.app.message,
   user:state.oidc.user
  })
  
  export default connect(mapStateToProps,actionCreators)(Home)