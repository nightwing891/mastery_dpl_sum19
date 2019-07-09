import React, { Component } from 'react';
import CourseForm from './CourseForm';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';

class Course extends Component {
  state = { editing : false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })
  render() {
    const { title, subtitle, description, workbook, id , remove, edit } = this.props
    const { editing } = this.state
    return(
      <Segment>
        { editing ?
           <CourseForm {...this.props} close={this.toggleEdit } edit={this.props.edit} />
           :
           <div>
            <Header>{ title }</Header>
           </div>
           }
           <Button icon color="yellow" onClick={this.toggleEdit}>
          <Icon name='pencil' />
        </Button>
        <Button icon color="red" onClick={() => remove(id)}>
          <Icon name='trash' />
        </Button>
      </Segment>

    )
  }
}



export default Course;