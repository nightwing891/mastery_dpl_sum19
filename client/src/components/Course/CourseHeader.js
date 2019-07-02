import React, { Component } from 'react';
import { Header, Button, Divider, Grid, Icon, Search, Segment, Container } from "semantic-ui-react";

const CourseHeader = ({title, subtitle}) => (
<Container>
<Header as="h1">
  { title }
</Header>
<p>{ subtitle }</p>
<br/>
<br/>
<br/>
</Container>
)

export default CourseHeader;