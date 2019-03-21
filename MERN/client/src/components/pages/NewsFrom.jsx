import React, {Component}  from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import {SERVER_URL} from '../../config'
import api from '../../api'

class News extends Component {


    componentDidMount() {
        axios.get(`${SERVER_URL}/getNews`).then(res=>{
            console.log(res)
        })   
    }



    handleSubmit = (event) => {
      event.preventDefault() 
      let {
          Title, 
          Description, 
 
      } = event.target
      console.log(event)
      console.log(event.target.Photo)



      api.addPicture(this.state.image).then(res=>{ //SAVES TO CLOUDINARY RETURN LINK

        console.log('is the image here?', res)
        //this.setState({showImage:res.imgPath.url}) //Show picture before sending to your database 

        let postObj = { //We are sending this to our api -- this will be req.body on the server side
            Title:Title.value, 
            Description:Description.value,
            Image:res.imgPath.url
         
        }
        console.log(postObj)
    
      
        axios.post(`${SERVER_URL}/sendNews`, postObj).then(res=>{
          console.log(res)
        })
      })
      
 
  
    }

  imageChange  = (e) => {
    console.log(e.target.files)
    this.setState({
        image:e.target.files[0]
    })
  }
  render(){
  return(
      <div>
          <NavBar />
    <div className="newsBox">
    <h1>Report</h1>
          <form onSubmit={this.handleSubmit}>
              {/* <input type="text" name="Room" placeholder="Room Number"/> */}
              <input type="text" name="Title" placeholder="Title"/>
              <input type="text" name="Description" placeholder="Description"/>
              <input type="file" name="Photo" placeholder="" onChange={e=>{this.imageChange(e)}}/>
              <button type='submit'>
                  Sent
              </button>
          </form>
  </div>
  </div>


  )
}
}

export default News