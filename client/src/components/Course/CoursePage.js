import React, { Component } from 'react';
import CourseHeader from './CourseHeader';
import CourseDescription from './CourseDescription';
import CourseOverview from './CourseOverview';
import CourseLessonPlan from './CourseLessonPlan';
import { Header, Button, Divider, Grid, Icon, Search, Segment, Container } from "semantic-ui-react";
import Home from '../Home';

class CoursePage extends React.Component {

  render() {
    const { title, subtitle, description, workbook, id } = this.props.location.state
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
        <CourseOverview/>
        <CourseLessonPlan/>
      </>

    )
  }
}

export default CoursePage;

//this page is located - Helper: api_course_path Path: /api/courses/:id Action: api/courses#show
