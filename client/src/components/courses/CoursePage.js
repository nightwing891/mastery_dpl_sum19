import React, { Component } from 'react';
import CourseOverview from './CourseOverview';
import LessonIndex from '../lessons/LessonIndex';
import { Header } from 'semantic-ui-react';
import axios from 'axios';

class CoursePage extends Component {

  state = { lessons: [] }

  componentDidMount() {
    const { id } = this.props.location.state
    axios.get(`/api/courses/${id}`)
      .then(res => {
        this.setState({ lessons: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { title, subtitle, description, workbook, id, } = this.props.location.state
    const { lessons } = this.state
    return (
      <>
        <center>
        <Header as="h1">
          <Header.Content>
              { title }
            <Header.Subheader>
              { description }
            </Header.Subheader>
          </Header.Content>
        </Header>
        </center>
        <CourseOverview lessons={lessons} />
        <LessonIndex lessons={lessons} />
      </>

    )
  }
}

export default CoursePage;

//this page is located - Helper: api_course_path Path: /api/courses/:id Action: api/courses#show
