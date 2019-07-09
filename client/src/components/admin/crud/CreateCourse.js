import React, { Component } from 'react';
import Navbar from '../../Navbar';
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

  addCourse = (course) => {
   axios.post('/api/courses', { course } )
    .then( res => {
      const { courses  } = this.state
      this.setState({ courses: [...courses, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    const { title, subtitle, description, workbook, id } = this.props
    return(
      <>
      <h1>Create Course</h1>
      <CourseForm add={this.addCourse} />
      </>

    )
  }
}



export default CreateCourse;