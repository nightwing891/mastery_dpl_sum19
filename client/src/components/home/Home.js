import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import HomepageHero from './HomepageHero';
import Reviews from './Reviews';
import axios from 'axios';
import CourseIndex from '../courses/CourseIndex';
import TopLessons from './TopLessons';

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

      <TopLessons />
          
      <CourseIndex courses={this.state.courses}/>
        
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