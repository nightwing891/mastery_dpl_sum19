import React, { Component } from 'react';
import { Header, Container } from "semantic-ui-react";
import axios from 'axios';

class AdminHeader extends React.Component {


  render() {
    const { title, subtitle } = this.props
    return (
      <Container>
        <Header as="h1" style={{ padding: '1em', margin: '1em' }}>
          {title}
        </Header>

        <br />
      </Container>
    )
  }
}
export default AdminHeader;