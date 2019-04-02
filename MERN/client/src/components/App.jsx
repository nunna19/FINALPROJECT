import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MailFrom from './pages/MailFrom';
import Sent from './pages/Sent'
import Inbox from './pages/Inbox';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import MailPage from './pages/MailPage';
import NewsFrom from './pages/NewsFrom';
import WarnLogin from './pages/WarnLogin';


export default class App extends Component {
  state = {
    countries: [],
    user: {},
  }

  componentDidMount() {
    this.setUser()
  }

  setUser = () => {
    if (api.isLoggedIn()) {
      this.setState({ user: api.getLocalStorageUser() })
    } else {
      this.setState({ user: {} })

    }
  }

  handleLogoutClick(e) {
    api.logout()
    //this.setState({user:null})
    this.setUser()

  }

  render() {
    console.log(this)
    return (
      <div className="App">

      <div className="headle">
        
          <div className="picNavBar">
          <NavLink to="/" exact><img src="../news.png" style={{width:"65px"}}/></NavLink> 
           <NavLink to="/MailPage" exact><img src="../upMail.png" style={{width:"40px"}}/></NavLink>
          </div>
          <div className="welcome">
        <span>
        {api.isLoggedIn() && <span >Hello :</span> } {this.state.user.firstName}
         {!api.isLoggedIn() && <NavLink to="/signup">SIGN UP</NavLink>}
         </span>
         <span> |
        {!api.isLoggedIn() && <NavLink to="/login"> LOG IN</NavLink>}
         {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>   Logout</Link>}
        </span>
        </div>
      </div>  

  

        <Switch>


        <Route
            exact
            path='/'
            render={(props) => <Home {...props}  setUser={this.setUser} />}
          />
          <Route
            path='/signup'
            render={(props) => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            path='/login'
            render={(props) => <Login {...props} setUser={this.setUser}/>}
          />

        {api.isLoggedIn() && <Route
            path='/MailPage'
            render={(props) => <MailPage {...props} setUser={this.setUser}/>}

          />}

        {!api.isLoggedIn() && <Route
            path='/MailPage'
            render={(props) => <WarnLogin {...props} setUser={this.setUser}/>}
            
          />}

          <Route
            path='/MailFrom'
            render={(props) => <MailFrom {...props} setUser={this.setUser}/>}
          />

          <Route
            path='/Sent'
            render={(props) => <Sent {...props} setUser={this.setUser}/>}
          />  
       
          <Route 
            path='/Inbox'
            render={(props) => <Inbox {...props} setUser={this.setUser}/>}
          /> 

          <Route
          path='/NewsFrom'
          render={(props)=> <NewsFrom {...props} setUser={this.setUser}/>}
          />

         
         
          <Route render={() => <h2>404</h2>} />


        </Switch>

          
            
        <header className="menuBar">
     
        
    
        </header>


      </div>
    );
  }
}

