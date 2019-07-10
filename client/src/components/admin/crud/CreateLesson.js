import React, { Component } from 'react';
import Navbar from '../../Navbar';
import LessonForm from './LessonForm';

import axios from 'axios';


class CreateLesson extends React.Component {
  state = { courses: [], lessons: [] }

  componentDidMount() {
      axios.get("/api/courses")
      .then( res => {
        this.setState({ courses: res.data })
      })
      axios.get(`api/courses/:course_id/lessons`)
      .then( res => {
        this.setState({ lessons: res.data})
      })
      .catch( err => {
        console.log(err)
      })
  
  }

  addLesson = (lesson) => {
    axios.post('/api/courses/:course_id/lessons', { lesson })
     .then( res => {
       const { lessons } = this.state
       this.setState({ lessons: [...lessons, res.data] })
     })
     .catch( err => {
       console.log (err)
     })
  }

  // renderCourses = (course) => {
  //   const { courses } = this.state
  //   return courses.map({ course => key=course.id,[...course])}
  // }
  

  render() {
    const { instructor, title, subtitle, description, length, body, complete, course_id } = this.props

   return(
      <>
      <Navbar />
      <h1>Create Lesson</h1>
      <LessonForm add={this.addLesson} render={this.renderCourses}/>
      </>
    )
 }
}


export default CreateLesson;