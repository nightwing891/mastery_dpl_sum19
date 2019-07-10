import React from 'react';
import { Button, Form, Segment, Header, Select } from 'semantic-ui-react';
import CreateLesson from './CreateLesson';
import axios from 'axios';

class LessonForm extends React.Component {
  state = { instructor: '', title: '', subtitle: '', description: '', length: '', body: '', complete: '', course_id: '' }

  componentDidMount() {
    
    if (this.props.id)
      this.setState({ 
        instructor: this.props.instructor,
        title: this.props.title, 
        subtitle: this.props.subtitle, description: this.props.description, length: this.props.length, 
        body: this.props.body,
        complete: this.props.complete,
        course_id: this.props.course_id
        })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { id, instructor, title, subtitle, description, length, body, complete, close } = this.props
      const lesson = { instructor, title, subtitle, description, length, body, complete }
      this.props.edit(lesson)
      this.props.close()
    } else {
    this.props.add(this.state);
    }
    this.setState({ instructor: '', title: '', subtitle: '', description: '', length: '', body: '', complete: '', course_id: '' });
    }


  render() {
    const { instructor, title, subtitle, description, length, body, complete, course_id } = this.state
  
    return(
     
      <Segment basic>
        <Header as='h1' textAlign='center'>Lesson</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="CourseId"
            autoFocus
            required         
            name='courseid'
            value={course_id}
            placeholder='Select Course'
            onChange={this.handleChange}
            options={courseOptions}
          />
          <Form.Input
            label="Instructor"
            autoFocus
            required         
            name='instructor'
            value={title}
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
          <Form.Select
            label="Complete"
            autoFocus
            required         
            name='complete'
            value={complete}
            placeholder='complete'
            onChange={this.handleChange}
            options={completeOptions}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
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

const courseOptions = [

]

export default LessonForm;