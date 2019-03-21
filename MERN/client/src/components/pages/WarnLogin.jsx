import React, {Component}  from 'react';
import {NavLink} from 'react-router-dom';
import api from '../../api';

class warn extends Component {

  showLogin = () => {
    if(api.isLoggedIn()){
      return 
    } else {
      return  (
        <div>
       <h5> VISITED PAGE NEED <NavLink to="/signup" style={{color:'rgb(0, 128, 255)'}}>SIGN UP</NavLink> OR <NavLink to="/login" style={{color:'rgb(0, 128, 255)'}}>LOG IN</NavLink> PLEASR!</h5>
        </div>
      )
    }
}


  render(){
  
    return(
      <div className="wornBackground">
        <div className="warnFirstBox">
          <div className="warnSecondbox">

             <p>{this.showLogin()}</p>
  
          </div>
        </div>
      </div>
    )
  }
}



export default warn