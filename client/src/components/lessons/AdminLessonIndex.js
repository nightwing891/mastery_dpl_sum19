import React from 'react';
import AdminLessonList from './AdminLessonList';

const AdminLessonIndex = ({ lessons }) => (

  <>
    <h1>All Lessons</h1>
      <ul>
        { lessons.map( lesson => <AdminLessonList key={lesson.id} {...lesson}  /> ) }
      </ul>
  </>
    )

export default AdminLessonIndex