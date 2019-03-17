import React, { Component } from 'react';
import Axios from 'axios';
import CrossfadeImage from 'react-crossfade-image';



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
    NewsMessage:[],
    imageIndex: 0
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
            const listNews = this.state.NewsMessage.map((eachMessage,i)=>{ 
              console.log(eachMessage.Title)
              return (
                  <div>
                    <p>{eachMessage.Title} : {eachMessage.Description}</p>

                  </div>
              )  
            })
            return listNews
          }


render() {
  return (
    <div>
    <div className="Homeimg">
      <button onClick={this.changeImage} >
      <CrossfadeImage 
        src={images[this.state.imageIndex]}
        duration={1000}
        timingFunction={"ease-out"}
        style={{ maxWidth:'100%', maxHeight: '100%' } }
      />
      </button>
      </div>
     
      {this.showAllNews()}

   </div>
  );
}
}

export default Home;





