import React from 'react';
import CourseList from './CourseList';

const CourseIndex = ({courses}) => (

  <div>
  <h1>All Courses</h1>
      {
        courses.map( course => <CourseList key={course.id} {...course} /> )
      }
</div>
)



export default CourseIndex;
