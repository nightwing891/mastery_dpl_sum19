import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react'



const HomepageHero = () => (
  <Container text>

    <Header as='h1' style={{
      fontSize: '10em'
    }}>
      DevPoint University
    </Header>

    <Header as='h5'>
     Learn It, Code It, Build It.
    </Header>

   <Header as='h2'>
      Let your SKILLS do the talking.
    </Header>

    <Button primary size='huge'>
       Get Started
     <Icon name='right arrow' />
    </Button>

  </Container>
)

export default HomepageHero;