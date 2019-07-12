import React, { Component } from 'react';
import CourseHeader from './CourseHeader';
import CourseDescription from './CourseDescription';
import CourseOverview from './CourseOverview';
import CourseLessonPlan from './CourseLessonPlan';
import { Header, Button, Divider, Grid, Icon, Search, Segment, Container } from "semantic-ui-react";
import Home from '../Home';
import LessonIndex from '../Lesson/LessonIndex';
import axios from 'axios';

class CoursePage extends React.Component {

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
    const { title, subtitle, description, workbook, id, } = this.props.location.state
    const { lessons } = this.state
    return (
      <>
        <CourseHeader
          course_id={id}
          title={title}
          subtitle={subtitle}
        />
        <CourseDescription
          description={description}
        />
        <CourseOverview lessons={lessons}/>
        <LessonIndex lessons={lessons}/>
        <CourseLessonPlan/>
      </>

    )
  }
}

export default CoursePage;

//this page is located - Helper: api_course_path Path: /api/courses/:id Action: api/courses#show
