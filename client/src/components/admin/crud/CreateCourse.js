import React, { Component } from 'react';
import CourseForm from './CourseForm';
import axios from 'axios';

// Form has the axios call
// handleSubmit calls the course create

class CreateCourse extends React.Component {
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