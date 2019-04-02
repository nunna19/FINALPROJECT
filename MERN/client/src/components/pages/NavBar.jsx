import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import api from '../../api';


class NavBar extends Component {

  showNewspage=()=>{
    console.log(this.props)
    console.log(isOfficer)
    let user = api.getLocalStorageUser(); 
    let isOfficer = user.officer; 

    if (isOfficer){
      return(<span><Link to="/NewsFrom">Update News</Link></span> )
    }

  }



  render(){
  return(


      <div className="mailNav">
          <span><Link to="/Inbox">Inbox</Link></span>
          <span><Link to="/Sent">Sent</Link></span> 
          <span><Link to="/MailFrom">Write</Link></span> 
          {this.showNewspage()}
          
        </div> 

  )
}
}

export default NavBar


