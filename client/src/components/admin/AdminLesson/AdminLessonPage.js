import React, { Component } from "react";
import LessonContent from "./LessonContent";
import LessonHeader from "./LessonHeader";
import Video from "./Video";
import LessonDescription from "./LessonDescription";
import LikeIt from "./LikeIt";
import { Button } from 'semantic-ui-react';
import { CourseConsumer } from '../../../providers/CourseProvider';
import { Link } from 'react-router-dom';

class AdminLessonPage extends React.Component {
  state = {};

  render() {
    const {
      id,
      instructor,
      title,
      subtitle,
      description,
      length,
      body,
      course_id
    } = this.props.location.state;
    const {deleteLesson} = this.props.lesson
    return (
      <>
        {/* Put Button */}
        <LessonHeader lesson_id={id} title={title} />
        <LessonContent />
        <Video />
        <LessonDescription description={description} />
        <LikeIt />

        <Button 
          size='small' 
          color="red"
          onClick={()=> deleteLesson(course_id, id)}
        >
          Delete Lesson
        </Button> 
        
        <Link to = {{ 
          pathname: '/admin-create-lesson', 
          state: { id, instructor, title, subtitle, description, length, body, course_id }
        }} >
          <Button 
            size='small' 
            color="yellow"
            
          >
            Edit Lesson
          </Button> 
        </Link>
        
      </>
    );
  }
}

export default class ConnectedAdminLessonPage extends Component {
  render() {
    return (
      <CourseConsumer>
        { lesson => <AdminLessonPage { ...this.props } lesson={lesson} />}
      </CourseConsumer>
    )
  }
}