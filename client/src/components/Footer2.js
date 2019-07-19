import React from 'react';
import { Container, Grid, Header, Segment } from 'semantic-ui-react'

const Footer2 = () => (

    <Segment inverted vertical>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column floated='left' width={3}>
            <Header inverted as='h5' content='© 2019 DevPoint Studios LLC' />
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
            <Header inverted as='h5' content='Made by DevPoint Labs Alumni' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer2;