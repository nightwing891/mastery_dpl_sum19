import React, { Component } from 'react';
import { Accordion, Icon, Header } from "semantic-ui-react";
import LessonList from './LessonList';
import { Grid } from "semantic-ui-react";

const LessonIndex = ({ lessons }) => (

  <div>
    <h1 style={{ textAlign: 'center' }}>All Lessons</h1>

    <Grid columns={3}>
      <Grid.Row>
        {lessons.map(lesson => <LessonList key={lesson.id} {...lesson} />)}
      </Grid.Row>
    </Grid>

  </div>
)

export default LessonIndex;