import React, { Component } from 'react';
import { Icon, Accordion, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';


class LessonList extends Component {
  state = { activeIndex: -1 }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const { id, instructor, title, subtitle, description, length, body, complete, course_id } = this.props

    return (
      <>


        <Accordion>
          <Segment>
            <Accordion.Title style={{ textAlign: 'left'}} active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              {title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p style={{ textAlign: 'left' }} >
              {description}
              </p>
              <Link style={{ textDecoration: 'none', textAlign: 'center' }} to={{ pathname: `../lesson/${id}`, state: { id, instructor, title, subtitle, description, length, body } }} >View Lesson</Link>
            </Accordion.Content>
          </Segment>
        </Accordion>
      </>
    )
  }
}

export default LessonList;