import React, { Component } from 'react';

class LessonPage extends Component {

  state = {}

  render() {
    console.log(this.props.location.state)
    const { id, instructor, title, subtitle, description, length, body } = this.props.location.state;
    return(
      <>
      <p>Fill in this page at client/src/components/Lesson/LessonPage. Things to add: </p>
      <ul>
        <li>instructor - {instructor}</li>
        <li>title - {title}</li>
        <li>subtitle - {subtitle}</li>
        <li>description - {description}</li>
        <li>length - {length}</li>
        <li>body - {body}</li>
      </ul>
      <br/>
      <br/>
      </>
    )
  }
}

export default LessonPage;