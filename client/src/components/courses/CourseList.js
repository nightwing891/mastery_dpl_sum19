import React from 'react';
import { Grid, Card } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const CourseList = ({title, subtitle, description, workbook, id}) => (
  <Grid.Column>
          <Card style={{ padding: '1em', margin: '1em', background: '#8168B1' }}>
            <Card.Content>
              <Card.Header><Link style={{ textDecoration: 'none', color: 'white' }} to={{ pathname: `./course/${id}`, state: { id, title, description, workbook, subtitle, } }} >{ title }</Link></Card.Header>
            </Card.Content>
          </Card>
      </Grid.Column>
)

export default CourseList;

