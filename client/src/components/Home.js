import React, { Component } from 'react';
import { Navbar, Footer, Dimmer, Loader } from 'semantic-ui-react';
import HomepageHero from './HomepageHero';
import Reviews from './Reviews';
import axios from 'axios';
import CourseIndex from './Course/CouseIndex';

class Home extends Component {

  state = { courses: [], loaded: false }

  setLoaded = () => {
    this.setState({ loaded: true })

  }

  componentDidMount(){
    axios.get("/api/courses")
    .then( res => {
      this.setState({ courses: res.data })
      this.setLoaded()
    })
    .catch ( err => {
      console.log(err)
    })
  }

  render(){
    const { loaded } = this.state
    if(loaded && this.state.courses.length > 0)
    return(
      <>  
      <HomepageHero /> 

      <div className="home-videos">
        <div className="video">
          <p>Video goes here + link </p>
          <h4>Description of the video</h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      
        <CourseIndex courses={this.state.courses}/>

      <h2>Reviews</h2>
        <Reviews />   
      </>
    )
    else
      return( 
      <Dimmer active>
        <Loader>
          Loading site...
        </Loader>
      </Dimmer>
    )
  }
}

export default Home;