import React, { Component } from 'react';
import api from '../../api';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",  // username = room number login
      firstName: "",
      lastName: "",
      password: "",
      officer: false,
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      officer:this.state.officer
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.setUser()
        this.props.history.push("/MailPage") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>

          Room number: <input type="number" value={this.state.username} name="username" onChange={this.handleInputChange} placeholder="Room Numder" /> <br />
          FirstName: <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleInputChange} placeholder="first name..." />  <br/>
          LastName: <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleInputChange} placeholder="last name..." /> <br />
          Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} placeholder="password..." /> <br />
          <button onClick={(e) => this.handleClick(e)}>Signup</button>

        </form>

        {this.state.message && <div className="info info-danger">
        {this.state.message}
        </div>}
      </div>
    );
  }
}