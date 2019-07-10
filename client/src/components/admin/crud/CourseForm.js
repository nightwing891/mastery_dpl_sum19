import React from 'react';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class CourseForm extends React.Component {
  state = { title: '', subtitle: '', description: '', workbook: '' }

  componentDidMount() {
    
    if (this.props.id)
      this.setState({ title: this.props.title, subtitle: this.props.subtitle, description: this.props.description, workbook: this.props.workbook, id: this.props.id  })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit(this.state)
      this.props.close()
    } else {
    this.props.add(this.state);
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


export default CourseForm;