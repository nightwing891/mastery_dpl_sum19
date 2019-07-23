import React, { Component } from "react";
import { Video } from 'cloudinary-react';
import { Button, Header, Container } from 'semantic-ui-react';
import { CourseConsumer } from '../../providers/CourseProvider';
import { Link } from 'react-router-dom';
import AllLessonBack from '../common/backButtons/AllLessonsBack';

class AdminLessonPage extends Component {

  state = {}

  render() {
    const { id, instructor, title, subtitle, description, length, body, course_id } = this.props.location.state;
    const {deleteLesson} = this.props.lesson
    return (
      <>
      <AllLessonBack />
      <Button 
          size='small' floated="right"
          onClick={()=> deleteLesson(course_id, id)}
          style={{ padding: '1em', margin: '1em' }}
      >
          Delete Lesson
        </Button> 
        
        <Link to = {{ 
          pathname: '/admin-create-lesson', 
          state: { id, instructor, title, subtitle, description, length, body, course_id }
        }} >
          <Button 
            size='small' floated="right"
            style={{ padding: '1em', margin: '1em' }}
          >
            Edit Lesson
          </Button>
          </Link>
      <br/>
      <br/>
        <Container fluid>
          <center>
          <Header as='h3'>
            <Header.Content>
              {title}
            <Header.Subheader>{ subtitle }</Header.Subheader>
        </Header.Content>
      </Header>
      </center>
      
      <center>
      <Video 
        cloudName='dtajlsppz' 
        publicId={body}
        width='960'
        controls='true'
      />
      </center>
      <Header as='h3' >
        <Header.Content>
          Description
          <Header.Subheader>{ description }</Header.Subheader>
        </Header.Content>
      </Header>
      </Container>

       
       
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