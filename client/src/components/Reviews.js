import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';



const Reviews = () => (
  <>
  <h2>What Students Are Saying</h2>
  <Card.Group>
    <Card>
      <Card.Content>
       <Card.Description>A visual guide could be
a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone.</Card.Description>
<br />
       <Card.Header>Cha Ji-Hun</Card.Header>
       <Card.Meta>Co-Founder of Forpeople</Card.Meta>
<Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
    </Card.Content>
    </Card>

     <Card>
      <Card.Content>
       <Card.Description>The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments.</Card.Description>
       <br />
       <Card.Header>Henry Itondo</Card.Header>
       <Card.Meta>Founder of Forma DS</Card.Meta>
       <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
    </Card.Content>
    </Card>

    <Card>
      <Card.Content>
       <Card.Description>TInformaNon design is the presentaNon—placement and prioriNzaNon of informaNon in a way that facilitates understanding. InformaNon design is an area of user experience design.</Card.Description>
       <br />
       <Card.Header>Fua Lamba</Card.Header>
       <Card.Meta>Co-Founder of Forma DS</Card.Meta>
       <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
    </Card.Content>
    </Card>
  </Card.Group>
  </>
  
)

 


export default Reviews;