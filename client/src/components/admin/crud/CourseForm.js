import React, { Component } from 'react';
import { CourseConsumer } from '../../../providers/CourseProvider';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class CourseForm extends React.Component {
  state = { title: '', subtitle: '', description: '', workbook: '' }

  componentDidMount() {
    if (this.props.currentCourse)
      this.setState({ title: this.props.currentCourse.title, subtitle: this.props.currentCourse.subtitle, description: this.props.currentCourse.description, workbook: this.props.currentCourse.workbook, id: this.props.currentCourse.id  })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentCourse) {
      this.props.course.updateCourse(this.state)
    } 
    else {
    this.props.course.addCourse(this.state);
    }
    this.setState({ title: '', subtitle: '', description: '', workbook: '' });
    
    }


  render() {
    const { title, subtitle, description, workbook } = this.state
  
    return(
     
      <Segment basic>
        <Header as='h1' textAlign='center'>Course</Header>
        <Form onSubmit={this.handleSubmit}>
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
            label="Workbook"
            autoFocus
            // required        
            name='workbook'
            value={workbook}
            placeholder='Workbook'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    
    )
  }
}

// export default CourseForm;

export default class ConnectedCourseForm extends Component {
  render() {
    return (
      <CourseConsumer>
        { course => <CourseForm { ...this.props } course={course} />}
      </CourseConsumer>
    )
  }
}