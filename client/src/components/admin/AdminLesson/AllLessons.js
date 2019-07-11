import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import LessonList from './LessonList';
import AdminHeader from '../AdminCourses/AdminHeader';
import AllCourses from '../AdminCourses/AllCourses';
import { CourseConsumer } from '../../../providers/CourseProvider';

// this page is /admin-lessons
// need to create a delete course button - use a provider and a consumer for this component

class AllLessons extends React.Component {
  state = {lessons: []}

  componentDidMount(){
    const { id } = this.props.location.state
    axios.get(`/api/courses/${id}/lessons`)
    .then( res => {
      this.setState({ lessons: res.data })
    })
    .catch ( err => {
      console.log(err)
    })
  }




  render() {
    const { id, title } = this.props.location.state
    const { deleteCourse } = this.props.course
    const { lessons } = this.state
    return(  
      <div>
        <AdminHeader
          course_id={id}
          title={title}
        />

        <h1>All Lessons</h1>
          <ul>
          { lessons.map( lesson => <LessonList key={lesson.id} {...lesson} /> )}
        </ul>

        <Button 
          size='small' 
          color="red"
          onClick={()=> deleteCourse(id)}
        >
          Delete Course
        </Button> 
      </div>
    )
  }
}



export default class ConnectedAllLessons extends Component {
  render() {
    return (
      <CourseConsumer>
        { course => <AllLessons { ...this.props } course={course} />}
      </CourseConsumer>
    )
  }
}