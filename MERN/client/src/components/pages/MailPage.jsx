import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavBar from './NavBar'
import Inbox from './Inbox'
class Home extends Component {



  render(){
  
    return( 
    <div> 

      <Inbox />
      
    </div>
  
    )
  }
}


export default Home