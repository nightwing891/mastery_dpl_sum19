import React, { Component } from 'react';
import AdminCourseList from './AdminCourseList';
import { CourseConsumer } from '../../providers/CourseProvider';
import { Link } from 'react-router-dom';
import { Grid, Button } from "semantic-ui-react";

class AdminCourseIndex extends Component {
  renderCourses = () => {
    const { courses } = this.props.course
    return courses.map(course => <AdminCourseList key={course.id} {...course} />)
  }

  render() {
    return (
      <>
      <Link to={{
        pathname: './admin-create-course',
      }} >
        <Button size='small' floated="right" style={{ padding: '1em', margin: '1em' }}>Create Course</Button>
      </Link>
      <h1 style={{ padding: '1em', margin: '1em' }}>All Courses</h1>
        <Grid columns={3}>
          <Grid.Row>
            {this.renderCourses()}
          </Grid.Row>
        </Grid>
      </>
    )
  }
}


export default class ConnectedAdminCourseIndex extends Component {
  render() {
    return (
      <CourseConsumer>
        {course => <AdminCourseIndex {...this.props} course={course} />}
      </CourseConsumer>
    )
  }
}