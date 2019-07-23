import React, { Component } from 'react';
import CourseList from './CourseList';
import { Grid } from 'semantic-ui-react';

const CourseIndex = ({courses}) => (
  <>
    <h1 
    style={{ 
      textAlign:'center',
      fontSize: '4em',
      color: '#8168B1' }}>All Courses</h1>
    <Grid.Row>
      {
        courses.map( course => <CourseList key={course.id} {...course} /> )
      }
    </Grid.Row>
  </>
  )



export default CourseIndex;
