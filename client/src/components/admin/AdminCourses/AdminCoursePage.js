import React, { Component } from 'react';
import AllLessons from '../AdminLesson/AllLessons';
import AdminCourseHeader from './AdminHeader';
import AllCourses from './AllCourses';
import axios from 'axios';


class AdminCoursePage extends React.Component {



  render() {
    const { title, subtitle, id } = this.props.location.state
   

    return (
      <>
      <AllLessons courses={this.state.courses} />   
      </>

    )
  }
}

export default AdminCoursePage;