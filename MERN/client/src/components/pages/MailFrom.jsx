import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import api from '../../api';
import {SERVER_URL} from '../../config'

class Mail extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`${SERVER_URL}/allUsers`).then(res => {
      console.log(res);
      this.setState({ users: res.data.allTheUsers });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let { Title, Description, itemType} = event.target;


    let postObj = {
      //We are sending this to our api -- this will be req.body on the server side
      Title: Title.value,
      Description: Description.value,
      userId: itemType.value,
     

    };
    console.log(postObj);

    axios.post(`${SERVER_URL}/sendMessage`, postObj).then(res => {
      console.log(res);
      this.props.history.push('/Sent')
    });
  };

  showAllTheUsers = () => {
    let user = api.getLocalStorageUser(); 
    let isOfficer = user.officer; 
    if(isOfficer){
    return this.state.users.map(user => {

      return<option value={user._id}>{user.username}</option>;
    });
  }else{
    return <option value={user._id}>To Officer</option>;
  }
  };

  render() {
    return (
      <div>
        <NavBar />

        <div className="mailBox">

        <div className="inputMailBox">

          <form onSubmit={this.handleSubmit}>
            
            To Room :<select name="itemType">
            
             {this.showAllTheUsers()}
            </select><br/>

            <input className="title" type="text" name="Title" placeholder="Title" /><br/>
            <textarea className="textarea" type="text" name="Description" placeholder="Description" cols="100" rows="8"/><br/>
            {/* <input className="photo" type="file"  name="Photo" placeholder=""/> <br/> */}
            <button type="submit">Sent</button>

          </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Mail;
