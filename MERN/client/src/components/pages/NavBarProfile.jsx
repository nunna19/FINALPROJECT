import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends Component {



  render(){
  
    return(
      <div className="home">
      <Link to="/Inbox">Inbox</Link>
      <Link to="/Sent">Sent</Link>
      <Link to="/MailFrom">Write"</Link>
      <Link to="/NewsFrom">Update News</Link>
    </div>
    )
  }
}


export default Home