import React, { Component } from 'react';
// import { Accordion, Icon, Header } from "semantic-ui-react";
import { CourseConsumer } from '../../providers/CourseProvider';
import LessonPlan from './LessonPlan'
import axios from 'axios';
import { Header } from 'semantic-ui-react';

class CourseLessonPlan extends Component {
  state = { lessons: [] }

  // componentDidMount() {
  //   const { id } = this.props.location.state
  //   axios.get(`/api/courses/${id}/lessons`)
  //     .then(res => {
  //       this.setState({ lessons: res.data })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  render() {
    // const { id, title, description, workbook, subtitle, } = this.props.location.state
    const { lessons } = this.props
    // const { lessons } = this.state
    return (
      <>
        <Header as="h1" Header as='h1' textAlign='center'>
          LessonPlan
          </Header>
        <ul>
          {lessons.map(lesson => <LessonPlan key={lesson.id} {...lesson} />)}
        </ul>
      </>

    )
  }
}


export default class ConnectedAllLessons extends Component {
  render() {
    return (
      <CourseConsumer>
        {course => <CourseLessonPlan {...this.props} course={course} />}
      </CourseConsumer>
    )
  }
}
