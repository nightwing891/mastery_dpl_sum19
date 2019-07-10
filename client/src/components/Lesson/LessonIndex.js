import React, { Component } from 'react';
import { Accordion, Icon, Header } from "semantic-ui-react";
import LessonList from './LessonList';

const LessonIndex = ({lessons}) => (

  <div>
  <h1>All Lessons</h1>
    <ul>
      {
        lessons.map( lesson => <LessonList key={lesson.id} {...lesson} /> )
      }
    </ul>
</div>
)

export default LessonIndex;