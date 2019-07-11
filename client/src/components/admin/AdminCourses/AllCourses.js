import React, { Component } from 'react';
import axios from 'axios';
import Course from './Course';

class AllCourses extends Component {
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

  updateCourse = (course) => {
    const { id }  = course 
    axios.put(`/api/courses/${id}`, course)
    .then(res => {
      const courses = this.state.courses.map( c => {
         if (c.id === id)
           return res.data
           return c
       })
       this.setState({ courses })
     })
  }

  deleteCourse = (id) => {
    axios.delete(`api/courses/${id}`)
     .then( res => {
       const { courses } = this.state
       this.setState({ courses: courses.filter( c=> c.id !==id )})
     })
  }


  renderCourses = () => {
    const { courses } = this.state
    return courses.map( course => <Course key={course.id} {...course} remove={this.deleteCourse} edit={this.updateCourse} /> )
  }

  render() {
    const { courses } = this.state
    return(
      <>  
        {this.renderCourses()}
      </>
    )
  }
}


export default AllCourses;