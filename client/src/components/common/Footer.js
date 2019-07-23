import React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'



const Footer = () => (
  <Segment inverted vertical style={{ padding: '2em 1em' }}>
    <Container>
      <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header inverted as='h4' content='Contact Us' />
          <List link inverted>
            <List.Item as='a'>contact@devpointlabs.com</List.Item>
            <List.Item as='a'>801-448-7240</List.Item>
            <List.Item as='a'>370 S. 300 E. SLC, UT 84111</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header floated='right' as='h4' inverted>
            Terms | Privacy Policy
            <p style={{ textAlign: 'right' }}>
            © DPL 2019
            </p>
          </Header>
          
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer;