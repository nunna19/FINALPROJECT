import React, { Component } from 'react';
import Axios from 'axios';
import CrossfadeImage from 'react-crossfade-image';
import {NavLink} from 'react-router-dom';
import api from '../../api';
import moment from 'moment';


const images = [
  "../kitchens.jpg",
  "../condo.jpeg",
  "../living.jpg",
  "/bathroom.jpg",
  "/fit.jpg",
  "/pool.jpg",
  "/nice living.jpg",
  "/viewcondo.jpg"
];
class Home extends Component {
  constructor() {
    super();
  this.state={
    NewsMessage:{messages:[]},
    imageIndex: 0,
  }
  this.changeImage = this.changeImage.bind(this);
}

changeImage() {
  if (this.state.imageIndex === images.length - 1) {
    this.setState({ imageIndex: 0 });
  } else {
    this.setState({ imageIndex: this.state.imageIndex + 1 });
  }
 
}


componentDidMount=()=>{


      Axios.get('http://localhost:5000/api/getNews')
      .then(res=>{
        this.setState({
          NewsMessage:res.data
      })
      })
    }


    showAllNews=()=>{
            const listNews = this.state.NewsMessage.messages.map((eachMessage,i)=>{ 
             
              return (
                  <div key={i} className="eachNewsBox">
                    
                    <i style={{color:"blue"}}>{ moment(eachMessage.created_at).format('L') }; : </i>
                    Title : {eachMessage.Title} : {eachMessage.Description}

                  </div>
              )  
            })
            return listNews
          }
      



      showLogin=()=>{
        if(api.isLoggedIn()){
          return(
            <div>
            <NavLink to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</NavLink>
           
            </div>
          )
        }else {
          return  (
            <div>
            <span><NavLink to="/signup">Signup</NavLink>  /  <NavLink to="login">Login</NavLink></span>
            </div>
          )
        }
      }




render() {
  // console.log(eachMessage.Title)
  return (
    <div className="Home">

      <button onClick={this.changeImage} >
    
      <CrossfadeImage 
        src={images[this.state.imageIndex]}
        duration={1000}
        timingFunction={"ease-out"}
        style={{ maxWidth:'100%', maxHeight: '100%' }}
      />

      </button>


      <div className="NewsBox" >

       <p> {this.showAllNews()} </p> 

      </div>

      

    </div>
  );
}
}

export default Home;





