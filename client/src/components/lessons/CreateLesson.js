import React, { Component } from 'react';
import LessonForm from './LessonForm';
import { Header } from 'semantic-ui-react';


class CreateLesson extends Component {
  rightTitle = () => {
    if (this.props.location.state.id) {
      return <Header as='h1' textAlign='center'>Edit Lesson</Header> 
    } else {
      return <Header as='h1' textAlign='center'>Create Lesson</Header>
    }
  }
  render() {
    const { id, instructor, title, subtitle, description, length, body, course_id } = this.props.location.state
    return(
        <>
        {this.rightTitle()}
        <LessonForm id={id} instructor={instructor} title={title} subtitle={subtitle} description={description} length={length} body={body} course_id={course_id} />
        </>
      )
 }
}


export default CreateLesson;