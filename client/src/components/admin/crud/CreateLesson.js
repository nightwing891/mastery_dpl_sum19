import React, { Component } from 'react';
import Navbar from '../../Navbar';
import LessonForm from './LessonForm';

import axios from 'axios';


class CreateLesson extends React.Component {
  render() {
   return(
      <>
      <h1>Create Lesson</h1>
      <LessonForm courseId={this.props.location.state.courseId}/>
      </>
    )
 }
}


export default CreateLesson;