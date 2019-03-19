import React, {Component}  from 'react';
import Axios from 'axios';
import NavBar from './NavBar';
import moment from 'moment';
import api from '../../api';


class Sent extends Component {


  state={
    messages:[]
  }


  componentDidMount=()=>{
    
    let user = api.getLocalStorageUser(); 
    let isOfficer = user.officer; 


    Axios.get('http://localhost:5000/api/getMessages')
    .then(res=>{

      let messages = res.data.messages 
      if(!isOfficer) {
        var filteredMessages = messages.filter((message)=>{
          return message.officer === true && message.userId === user._id //Only show messages that are from the officer and only to me 
        })
      } else {
        var filteredMessages = messages.filter((message)=>{
          return message.officer !== true //show all messages from people who are not the officer 
        }) 
      }
      console.log(res)

      this.setState({
        messages:filteredMessages
    })
    })
  }



  showAllNews=()=>{
    const listNews = this.state.messages.map((eachInbox,i)=>{ 
   
      return (
          <div key={i} className="eachInbox">
            
            <i style={{color:"blue"}}>{ moment(eachInbox.created_at).format('L') }; : </i>
            Title : {eachInbox.Title} : {eachInbox.Description}

          </div>
      )  
    })
    return listNews
  }



  render(){
 
  return(
    <div> 
      <NavBar/>
    <div className="indexBox">

  </div>

  <div className="sentBox" >

<p> {this.showAllNews()} </p> 

</div>
  </div>
  )
}
}



export default Sent



