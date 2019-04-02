import React, {Component}  from 'react';
import Axios from 'axios';
import NavBar from './NavBar';
import moment from 'moment';
import api from '../../api';
import {SERVER_URL} from '../../config'


class Inbox extends Component {

  state={
    messages:[],
    filteredRoom:[],
    sortMes:[]
  }


  componentDidMount=()=>{
    console.log(this.props)
    console.log(api.getLocalStorageUser())
    let user = api.getLocalStorageUser(); 
    let isOfficer = user.officer; 


    Axios.get(`${SERVER_URL}/getMessages`)
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
        messages:filteredMessages,
        filteredRoom:filteredMessages  /// search need because fillter up here too.
    })
    })
  }



  sortMessages =(something)=>{
    const messageCopy = [...this.state.messages]

    messageCopy.sort(function(a,b){

      if (a[something] < b[something])
      {return -1}
      if (a[something] > b[something])
      {return 1}
    return 0
    })
    this.setState({
      sortMes:messageCopy
    })
  }





  showAllNews=()=>{
    const listNews = this.state.filteredRoom.map((eachInbox,i)=>{ 

      if (eachInbox.writer.officer === false){
        return(

        <div key={i} className="eachInbox" >

            <span>FROM : {eachInbox.writer.username} </span>
                <i style={{color:"blue"}}> { moment(eachInbox.created_at).format('L') }; : </i>
                <span className="title">{eachInbox.Title.toUpperCase()}</span>: {eachInbox.Description}
       </div>
        )
      }
      return (
      

          <div key={i} className="eachInbox">

           <i style={{color:"blue"}}> { moment(eachInbox.created_at).format('L') }; : </i>
              <span className="title">{eachInbox.Title.toUpperCase()}</span> : {eachInbox.Description}
          </div>
      )  
    })
    return listNews
  }



  updateSearch = (event) => {
    console.log(event.target.value, this.state.messages)
    let messages = [...this.state.messages]
  
    let filterList = messages.filter((data)=>{
      console.log(data.writer.username, event.target.value)

      return data.writer.username.includes(event.target.value)

    })
    this.setState({
      filteredRoom:filterList, 
      search:event.target.value 
    })
  }
 
callSearch = () =>{
  let user = api.getLocalStorageUser(); 
  let isOfficer = user.officer; 
  if (isOfficer){
    return(<div>
      <form>

        <img width="30px" src="../../../search.png" alt=""/><input type="text" value={this.state.search} placeholder="Room Search..." 
        onChange={this.updateSearch}
        />

    </form>
    </div>)

    
  }
}
  




  
  render(){
   console.log()
  return(
    <div> 
      <NavBar/>

    <div className="indexMesBox" >
    {this.callSearch()}
    <p> {this.showAllNews()} </p> 



    </div>
  </div>
  )
}
}

export default Inbox



