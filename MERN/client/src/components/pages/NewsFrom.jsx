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
          this.props.history.push('/')
        })
      })
    };

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
    <div className="newsFrom">

          <form onSubmit={this.handleSubmit}>
             <input className="title" required type="text" name="Title" placeholder="Title" /><br/>
            <textarea className="textarea" required type="text" name="Description" placeholder="Description" /><br/>
              <input className="photo" required type="file" name="Photo" placeholder="" onChange={e=>{this.imageChange(e)}}/><br/>
              <button type='submit'> Sent  </button>
          </form>
  </div>
  </div>


  )
}
}

export default News