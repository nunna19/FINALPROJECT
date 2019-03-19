import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import api from '../../api';



class Mail extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/allUsers").then(res => {
      console.log(res);
      this.setState({ users: res.data.allTheUsers });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let { Title, Description, itemType } = event.target;

    //let offier = api.getLocalStorageUser().officer

    let postObj = {
      //We are sending this to our api -- this will be req.body on the server side
      Title: Title.value,
      Description: Description.value,
      userId: itemType.value,

    };
    console.log(postObj);

    axios.post("http://localhost:5000/api/sendMessage", postObj).then(res => {
      console.log(res);
    });
  };

  showAllTheUsers = () => {
    return this.state.users.map(user => {
      return <option value={user._id}>{user.username}</option>;
    });
  };

  render() {
    return (
      <div>
        <NavBar />

        <div className="mailBox">

          <form onSubmit={this.handleSubmit}>

            <select name="itemType">
              {this.showAllTheUsers()}
            </select>

            <input type="text" name="Title" placeholder="Title" />
            <input type="text" name="Description" placeholder="Description" />
            {/* <input type="file" name="Photo" placeholder=""/> */}

            <button type="submit">Sent</button>

          </form>

        </div>
      </div>
    );
  }
}

export default Mail;
