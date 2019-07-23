import React, { Component } from 'react';
import { CourseConsumer } from '../../providers/CourseProvider';
import { Button, Form, Segment, Header, Icon } from 'semantic-ui-react';


class LessonForm extends React.Component {
  state = { instructor: '', title: '', subtitle: '', description: '', length: '', body: '', course_id: '' }

  componentDidMount() {
    if (this.props.id)
      this.setState({ 
        id: this.props.id,
        instructor: this.props.instructor,
        title: this.props.title, 
        subtitle: this.props.subtitle, description: this.props.description, length: this.props.length, 
        body: this.props.body,
        complete: this.props.complete,
        })
    this.setState({ course_id: this.props.course_id })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.lesson.updateLesson(this.state)
    } else {
      this.props.lesson.addLesson(this.state);
    }
    this.setState({ instructor: '', title: '', subtitle: '', description: '', length: '', body: '', complete: '', course_id: '' });
    }

    uploadWidget =() => {
      window.cloudinary.openUploadWidget({ 
        cloud_name: 'dtajlsppz', 
        upload_preset: 'lvexul8t',
      })
    }

  render() {
    const { instructor, title, subtitle, description, length, body, complete, course_id } = this.state
  
    return(
     
      <Segment basic style={{background:'#f5f5f5'}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Instructor"
            autoFocus
            required         
            name='instructor'
            value={instructor}
            placeholder='Instructor'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Title"
            autoFocus
            required         
            name='title'
            value={title}
            placeholder='Title'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Subtitle"
            autoFocus
            required         
            name='subtitle'
            value={subtitle}
            placeholder='Subtitle'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Description"
            autoFocus
            required         
            name='description'
            value={description}
            placeholder='Description'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Length"
            autoFocus
            required         
            name='length'
            value={length}
            placeholder='Length'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Body"
            autoFocus
            required         
            name='body'
            value={body}
            placeholder='Body'
            onChange={this.handleChange}
          />

          <Icon name='upload' size='big' onClick={this.uploadWidget}/>

          <Segment textAlign='center' basic>
            <Button type='submit' color='purple'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    
    )
  }
}

const completeOptions = [
  { key: "t", text: "True", value: true }, 
  { key: "f", text: "False", value: false }
]

export default class ConnectedLessonForm extends Component {
  render() {
    return (
      <CourseConsumer>
        { lesson => <LessonForm { ...this.props } lesson={lesson} />}
      </CourseConsumer>
    )
  }
}