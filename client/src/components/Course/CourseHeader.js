import React, { Component } from 'react';
import { Header, Button, Divider, Grid, Icon, Search, Segment, Container } from "semantic-ui-react";

const CourseHeader = ({ title, subtitle, description }) => (
  <>
    <Header as="h1" style={{ textAlign: 'center' }}>
      {title}
    </Header>
    <p style={{ textAlign: 'center' }}>{subtitle}</p>
    <p as="h2" style={{ textAlign: 'center' }} >
      {description}</p>
  </>

)

export default CourseHeader;