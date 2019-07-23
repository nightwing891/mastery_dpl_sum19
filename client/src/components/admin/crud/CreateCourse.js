import React, { Component } from 'react';
import CourseForm from './CourseForm';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

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
      <br/>
      {this.rightTitle()}
      <CourseForm  currentCourse={this.props.location.state}/>
      </>

    )
  }
}



export default CreateCourse;