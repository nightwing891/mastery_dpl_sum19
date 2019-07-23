import React from 'react';
import CourseList from './CourseList';
import { Grid } from 'semantic-ui-react';

const CourseIndex = ({courses}) => (

  <>
  <h1>All Courses</h1>

  <Grid.Row>
      {
        courses.map( course => <CourseList key={course.id} {...course} /> )
      }
  </Grid.Row>
</>
)



export default CourseIndex;
