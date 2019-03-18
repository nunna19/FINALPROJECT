import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MailFrom from './pages/MailFrom';
import Sent from './pages/Sent'
import Inbox from './pages/Inbox';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import NavBarProfile from './pages/NavBarProfile';
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
    return (
      <div className="App">

      <div className="headle">
        <div>
        <span>
        {api.isLoggedIn() && <span>WELCOME :</span> } {this.state.user.username}
         {!api.isLoggedIn() && <NavLink to="/signup">SIGN UP</NavLink>}
         </span>
         <span>
         {!api.isLoggedIn() && <NavLink to="/login">LOG IN</NavLink>}
         {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>   Logout</Link>}
        </span>
        </div>
      </div>


      <div className="mailNav">
          <span><Link to="/Inbox">Inbox</Link></span>
          <span><Link to="/Sent">Sent</Link></span> 
          <span><Link to="/MailFrom">Write</Link></span> 
          <span><Link to="/NewsFrom">News</Link></span> 
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
            path='/NavBarProfile'
            render={(props) => <NavBarProfile {...props} setUser={this.setUser}/>}

          />}

        {!api.isLoggedIn() && <Route
            path='/NavBarProfile'
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
     
          <NavLink to="/" exact><img src="../news.png" style={{width:"100px"}}/></NavLink> 
          <NavLink to="/NavBarProfile" exact><img src="../upMail.png" style={{width:"60px"}}/></NavLink>
          {/* <NavLink to="/Profile" exact><img src="../upProflie.png" style={{width:"100px"}}/>
          
          </NavLink>   */}
        </header>


      </div>
    );
  }
}

