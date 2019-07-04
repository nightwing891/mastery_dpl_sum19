import React, { Component } from 'react';
import { Accordion, Icon, Header } from "semantic-ui-react";
import LessonIndex from './LessonIndex';

// need to fix indexing (activeIndex, index)
// will need to do some state/props shennanigans to get it all working

const LessonList = ({ instructor, title, subtitle, description, length, body }) => (
  <>
    <li>{ title }</li>
  </>
)

export default LessonList;