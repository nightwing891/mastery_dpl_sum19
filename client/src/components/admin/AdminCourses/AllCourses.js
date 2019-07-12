import React, { Component } from 'react';
import axios from 'axios';
import Course from './Course';
import { CourseConsumer } from '../../../providers/CourseProvider';

class AllCourses extends Component {
  renderCourses = () => {
    const { courses } = this.props.course
    return courses.map( course => <Course key={course.id} {...course} /> )
  }

  render() {
    return(
      <>  
        {this.renderCourses()}
      </>
    )
  }
}


export default class ConnectedAllCourses extends Component {
  render() {
    return (
      <CourseConsumer>
        { course => <AllCourses { ...this.props} course={course} />}
      </CourseConsumer>
    )
  }
}