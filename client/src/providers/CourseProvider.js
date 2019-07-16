import React, { Component } from "react";
import axios from "axios";

const CourseContext = React.createContext();
export const CourseConsumer = CourseContext.Consumer;

export class CourseProvider extends Component {

  state = { courses: [], lessons: [] }

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
       window.location.href = '/admin-courses'
     })
  }

  deleteCourse = (id) => {
    axios.delete(`api/courses/${id}`)
     .then( res => {
       const { courses } = this.state
       this.setState({ courses: courses.filter( c=> c.id !==id )})
       window.location.href = '/admin-courses'
     })
  }

  addCourse = (course) => {
    axios.post('/api/courses', { course } )
     .then( res => {
       const { courses  } = this.state
       this.setState({ courses: [...courses, res.data] })
       window.location.href = '/admin-courses'
     })
     .catch( err => {
       console.log(err)
     })
   }

   addLesson = (lesson) => {
     axios.post(`/api/courses/${lesson.course_id}/lessons`, { lesson } )
     .then( res => {
       const { lessons } = this.state
       this.setState({ lessons: [...lessons, res.data] })
       window.location.href = '/admin-courses'
     })
     .catch( err => {
       console.log(err)
     })
   }

  render() {
    return (
      <CourseContext.Provider value={{
        ...this.state,
        deleteCourse: this.deleteCourse,
        updateCourse: this.updateCourse,
        addCourse: this.addCourse,
        addLesson: this.addLesson,
      }}>
        { this.props.children }
      </CourseContext.Provider>
    )
  }
}
