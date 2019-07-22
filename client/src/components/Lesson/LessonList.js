import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon, Header } from "semantic-ui-react";
import LessonIndex from './LessonIndex';
import { Grid, Card, } from "semantic-ui-react";


// need to fix indexing (activeIndex, index)
// will need to do some state/props shennanigans to get it all working

const LessonList = ({ id, instructor, title, subtitle, description, length, body }) => (
  <Grid.Column >
    <Card style={{ padding: '1em', margin: '1em', background: '#8168B1' }}>
      <Card.Content>
        <Card.Header>
          <Link style={{ textDecoration: 'none', color: 'white' }} to={{ pathname: `../lesson/${id}`, state: { id, instructor, title, subtitle, description, length, body } }} >{title} by {instructor}</Link></Card.Header>
      </Card.Content>
    </Card>
  </Grid.Column>

)

export default LessonList;