import React, { Component } from 'react';
import LessonForm from './LessonForm';


class CreateLesson extends Component {
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