import React from 'react';
import AdminLessonList from './AdminLessonList';
import { Grid } from 'semantic-ui-react';

const AdminLessonIndex = ({ lessons, course_id }) => (

  <>
    <h1>All Lessons</h1>
    <Grid columns={3}>
      <Grid.Row>
        { lessons.map( lesson => <AdminLessonList key={lesson.id} {...lesson} course_id={course_id}  /> ) }
      </Grid.Row>
    </Grid>
  </>
)

export default AdminLessonIndex