import React, { Component } from 'react';
import CourseHeader from './CourseHeader';
import CourseDescription from './CourseDescription';
import CourseOverview from './CourseOverview';
import CourseLessonPlan from './CourseLessonPlan';
import { Header, Button, Divider, Grid, Icon, Search, Segment, Container } from "semantic-ui-react";

class CoursePage extends React.Component {
  render() {
    return (
      <>
        <CourseHeader/>
        <CourseDescription/>
        <CourseOverview/>
        <CourseLessonPlan/>
      </>

    )
  }
}

export default CoursePage;

//this page is located - Helper: api_course_path Path: /api/courses/:id Action: api/courses#show
