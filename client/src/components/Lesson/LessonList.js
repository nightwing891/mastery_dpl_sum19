import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon, Header } from "semantic-ui-react";
import LessonIndex from './LessonIndex';

// need to fix indexing (activeIndex, index)
// will need to do some state/props shennanigans to get it all working

const LessonList = ({ id, instructor, title, subtitle, description, length, body }) => (
  <>
    <li><Link to={{ pathname: `../lesson/${id}`, state: { id, instructor, title, subtitle, description, length, body } }} >{ title } by { instructor }</Link></li>
  </>
)

export default LessonList;