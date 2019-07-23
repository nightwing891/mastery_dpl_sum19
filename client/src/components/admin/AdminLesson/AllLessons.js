import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import LessonList from './LessonList';
import AdminHeader from '../AdminCourses/AdminHeader';
import CourseForm from '../crud/CourseForm';
import { CourseConsumer } from '../../../providers/CourseProvider';
import { Link } from 'react-router-dom';
import { Grid } from "semantic-ui-react";

// this page is /admin-lessons
// need to create a create lesson button

class AllLessons extends React.Component {
  state = { lessons: [] }

  componentDidMount() {
    const { id } = this.props.location.state
    axios.get(`/api/courses/${id}/lessons`)
      .then(res => {
        this.setState({ lessons: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }




  render() {
    const { id, title, description, workbook, subtitle, } = this.props.location.state
    const { deleteCourse } = this.props.course
    const { lessons } = this.state
    return (
      <div>
        <Button
          size='small' floated="right"
          onClick={() => deleteCourse(id)}
          style={{ padding: '1em', margin: '1em' }}
        >
          Delete Course
        </Button>

        <Link to={{
          pathname: './admin-create-course',
          state: { id, title, description, workbook, subtitle, }
        }} >
          <Button size='small' floated="right"
            style={{ padding: '1em', margin: '1em' }}>
            Edit Course
          </Button>
        </Link>

        <Link to={{
          pathname: './admin-create-lesson',
          state: { course_id: id }
        }} >
          <Button size='small' floated="right"
            style={{ padding: '1em', margin: '1em' }}>
            Create Lesson
          </Button>
        </Link>

        <AdminHeader
          course_id={id}
          title={title}
        />

        <h1 style={{ padding: '1em', margin: '1em' }}>All Lessons</h1>


        <Grid columns={3}>
          <Grid.Row>
            {lessons.map(lesson => <LessonList key={lesson.id} {...lesson} />)}
          </Grid.Row>
        </Grid>


      </div>
    )
  }
}



export default class ConnectedAllLessons extends Component {
  render() {
    return (
      <CourseConsumer>
        {course => <AllLessons {...this.props} course={course} />}
      </CourseConsumer>
    )
  }
}