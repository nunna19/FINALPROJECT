import React, {Component}  from 'react';
import Axios from 'axios';
import NavBar from './NavBar';
import moment from 'moment';
import api from '../../api';
import {SERVER_URL} from '../../config'

class Sent extends Component {

  
  state={
    messages:[]
    
  }


  componentDidMount=()=>{
    
    let user = api.getLocalStorageUser(); 
    
    console.log('in sent')

    Axios.get(`${SERVER_URL}/getMessages`)
    .then(res=>{
      console.log('in sent axios',res)
    let messages = res.data.messages 
      var filteredMessages = messages.filter((message)=>{
        console.log('write',message.writer, 'this maybe',user._id)
        return  message.writer._id === user._id //Only show messages that are from the officer and only to me 
      })
     
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
            Title : {eachInbox.Title} : {eachInbox.Description} <img sce={eachInbox.Image}/>

          </div>
      )  
    })
    return listNews
  }



  render(){
    console.log(this.state.messages)
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



