import React, { Component } from 'react';
import Home from '../Home';
import CourseHeader from './CourseHeader';

const CourseIndex = ({courses}) => (

  <div>
  <h1>All Courses</h1>
    {
      courses.map( course => <CourseHeader key={course.id} {...course} /> )
    }
</div>
)

export default CourseIndex;
