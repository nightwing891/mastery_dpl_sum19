import React from 'react';
import CourseList from './CourseList';
import { Grid } from 'semantic-ui-react';

const CourseIndex = ({courses}) => (
<>
  <Grid.Row>
      {
        courses.map( course => <CourseList key={course.id} {...course} /> )
      }
  </Grid.Row>
</>
)

export default CourseIndex;
