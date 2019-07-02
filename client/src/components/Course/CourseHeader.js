import React, { Component } from 'react';
import { Header, Button, Divider, Grid, Icon, Search, Segment, Container } from "semantic-ui-react";

class CourseHeader extends Component {
  render() {
    return(
<Container>
<Header as="h1">
Course Title
</Header>
<p>
Course SubTitle
</p>
</Container>
    )
  }
}

export default CourseHeader;