import React, { Component } from 'react';
import Navbar from '../../Navbar';
import LessonForm from './LessonForm';

import axios from 'axios';


class CreateLesson extends React.Component {
  render() {
    const { id, instructor, title, subtitle, description, length, body, course_id } = this.props.location.state
    return(
        <>
        <h1>Create Lesson</h1>
        <LessonForm id={id} instructor={instructor} title={title} subtitle={subtitle} description={description} length={length} body={body} course_id={course_id} />
        </>
      )
 }
}


export default CreateLesson;