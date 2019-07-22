import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react'
import hero from './HeroImage.png';

const styles = {
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,

  }
}

const HomepageHero = () => (
  <div text style={styles.hero} >

    <Header as='h1' inverted style={{
      fontSize: '10em',
      padding: '20px'
    }}>
      DevPoint University
    </Header>

    <Header as='h5' inverted style={{
      padding: '25px'
    }}>
     Learn It, Code It, Build It.
    </Header>

   <Header as='h2' inverted style={{
      padding: '25px'
    }}>
      Let your SKILLS do the talking.
    </Header>

  </div>
)

export default HomepageHero;