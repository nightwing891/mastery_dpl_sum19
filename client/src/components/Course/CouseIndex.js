import React, { Component } from 'react';
import Home from '../Home';
import CourseList from './CourseList';

const CourseIndex = ({courses}) => (

  <div>
  <h1>All Courses</h1>
    <ul>
      {
        courses.map( course => <CourseList key={course.id} {...course} /> )
      }
    </ul>
</div>
)



export default CourseIndex;
