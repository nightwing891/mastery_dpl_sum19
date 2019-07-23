import React, { Component } from 'react';
import CourseForm from './CourseForm';
import { Header } from 'semantic-ui-react';
import axios from 'axios';

class CreateCourse extends Component {
  state = { courses: [] }

  componentDidMount() {
    axios.get("/api/courses")
      .then( res => {
        this.setState({ courses: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  rightTitle = () => {
    if (this.props.location.state) {
      return <Header as='h1' textAlign='center'>Edit Course</Header> 
    } else {
      return <Header as='h1' textAlign='center'>Create Course</Header>
    }
  }

  render() {
    return(
      <>
      <h1>Create Course</h1> {/* create logic here: edit form if id exists */}
      <CourseForm  currentCourse={this.props.location.state}/>
      </>

    )
  }
}



export default CreateCourse;