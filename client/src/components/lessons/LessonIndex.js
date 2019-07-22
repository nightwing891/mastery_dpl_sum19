import React from 'react';
import LessonList from './LessonList';

const LessonIndex = ({lessons}) => (

<>
  <center>
    <h2>All Lessons</h2>
      <ul>
        {
          lessons.map( lesson => <LessonList key={lesson.id} {...lesson} /> )
        }
      </ul>
  </center>
</>
)

export default LessonIndex;