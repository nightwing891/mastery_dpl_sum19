import React, { Component } from 'react';
import { Grid, Header, Image, Segment } from 'semantic-ui-react'



const Reviews = () => (
  <>
  <h2 style={{ fontSize: '3em', textAlign: 'center' }}>What Students Are Saying</h2>
  
  <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h6' style={{ fontSize: '2em' }}>
              "A visual guide could be
a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Cha Ji-Hun</b> Co-Founder of Forpeople
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h6' style={{ fontSize: '2em' }}>
              "The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/steve.jpg' />
              <b>Henry Itondo</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h6' style={{ fontSize: '2em' }}>
              "Information design is the presentation—placement and prioritization of information in a way that facilitates understanding. Information design is an area of user experience design."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Fua Lamba</b> Co-Founder of Forma DS
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </>
  
)

 


export default Reviews;