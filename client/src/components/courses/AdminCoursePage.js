import React, { Component } from 'react';
import { CourseConsumer } from '../../providers/CourseProvider';
import CourseOverview from './CourseOverview';
import AdminLessonIndex from '../lessons/AdminLessonIndex';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AdminCoursePage extends Component {

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
    const { deleteCourse } = this.props.course
    const { lessons } = this.state
    return (
      <>
      <Button
          size='small' floated="right"
          onClick={() => deleteCourse(id)}
          style={{ padding: '1em', margin: '1em' }}
        >
          Delete Course
        </Button>

        <Link to={{
          pathname: '/admin-create-course',
          state: { id, title, description, workbook, subtitle, }
        }} >
          <Button size='small' floated="right"
            style={{ padding: '1em', margin: '1em' }}>
            Edit Course
          </Button>
        </Link>

        <Link to={{
          pathname: '/admin-create-lesson',
          state: { course_id: id }
        }} >
          <Button size='small' floated="right"
            style={{ padding: '1em', margin: '1em' }}>
            Create Lesson
          </Button>
        </Link>

        <Header as="h1">
          { title }
        </Header>
        <Header as="h2">
          { description }
        </Header>
        <CourseOverview lessons={lessons} />
        <AdminLessonIndex lessons={lessons} course_id={id} />
      
        
      </>

    )
  }
}

export default class ConnectedAdminCoursePage extends Component {
  render() {
    return (
      <CourseConsumer>
        {course => <AdminCoursePage {...this.props} course={course} />}
      </CourseConsumer>
    )
  }
}