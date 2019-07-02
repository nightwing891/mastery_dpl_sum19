import React, { Component } from 'react';
import { Navbar, Footer, Dimmer, Loader } from 'semantic-ui-react';
// import { Video, } from ;
// import { CoursesPrev} from 'some/folder';
// import { Reviews } from;
import axios from 'axios';
import CourseIndex from './Course/CouseIndex';

class Home extends Component {

  state = { courses: [], loaded: false }

  setLoaded = () => {
    this.setState({ loaded: true })

  }

  componentDidMount(){
    axios.get("api/courses")
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
      {/* <Navbar />  */}
      <h1>DevPoint University</h1>
      <p>Learn It, Code It, Build It</p>
      <h2>Let your SKILLS do the talking.</h2>

      <div className="home-videos">
        <div className="video">
          <p>Video goes here + link </p>
          <h4>Description of the video</h4>
        </div>
      </div>

      <br />
      <br />
      <br />
      <h2> Create Courses Preview</h2>

      <CourseIndex courses={this.state.courses}/>

      <h2>Reviews</h2>
      {/* <Reviews /> */}

      {/* <Footer /> */}

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

/* // 
//   <Header as="h3" textAlign="center">Devise Auth App</Header>
// ) */

// make axios call to the database to grab all courses, pass this through CoursePage

export default Home;