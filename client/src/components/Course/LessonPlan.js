import React, { Component } from 'react';
import { Icon, Accordion, AccordionPanel, Segment } from "semantic-ui-react";


class LessonPlan extends Component {
  state = { activeIndex: 0 }
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


        <Accordion style={{ textAlign: 'center' }}>
          <Segment>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              {subtitle}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                {description}
              </p>
            </Accordion.Content>
          </Segment>
        </Accordion>
      </>
    )
  }
}


export default LessonPlan;