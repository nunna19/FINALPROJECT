import React, {Component}  from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import {SERVER_URL} from '../../config'


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
  
  
      let postObj = { //We are sending this to our api -- this will be req.body on the server side
          Title:Title.value, 
          Description:Description.value,
       
      }
      console.log(postObj)
  
    
      axios.post(`${SERVER_URL}/sendNews`, postObj).then(res=>{
        console.log(res)
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
              <input type="file" name="Photo" placeholder=""/>
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