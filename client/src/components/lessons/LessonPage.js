import React, { Component } from 'react';
import { Video } from 'cloudinary-react';
import { Container, Header } from 'semantic-ui-react';

class LessonPage extends Component {

  state = {}

  render() {
    console.log(this.props.location.state)
    const { id, instructor, title, subtitle, description, length, body } = this.props.location.state;
    return(
      <>
        <Container fluid>
          <Header as='h3'>
            <Header.Content>
              {title}
            <Header.Subheader>{ subtitle }</Header.Subheader>
        </Header.Content>
      </Header>
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
    )
  }
}

export default LessonPage;