import React from 'react';
import { Grid, Card, } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const User = ({ name, email, id }) => (
  <Grid>
    <Grid.Row relaxed columns={4}>
      <Grid.Column>
        <Card style={{ padding: '1em', margin: '1em', background: '#8168B1' }}>
          <Card.Content>
            <Card.Header><Link style={{ textDecoration: 'none', color: 'white' }} to={{ pathname: `/users/${id}`, state: { user: { id, name, email } } }}>{name}</Link></Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default User;