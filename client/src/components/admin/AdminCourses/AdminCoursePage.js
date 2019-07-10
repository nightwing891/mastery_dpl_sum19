import React, { Component } from 'react';
import AllLessons from '../AdminLesson/AllLessons';
import AdminCourseHeader from './AdminCourseHeader';
import AllCourses from './AllCourses';
import axios from 'axios';


class AdminCoursePage extends React.Component {

  state = { lessons:[] }

  componentDidMount(){
    const { id } = this.props.location.state
    axios.get(`/api/courses/${id}`)
    .then( res => {
      this.setState({ lessons: res.data })
    })
    .catch ( err => {
      console.log(err)
    })
  }

  render() {
    const { title, subtitle, description, workbook, id } = this.props.location.state
    const { lessons } = this.state

    return (
      <>
      <AdminCourseHeader 
        course_id={id}
          title={title}
          subtitle={subtitle}
      />
      <AllLessons />
        
      </>

    )
  }
}

export default AdminCoursePage;