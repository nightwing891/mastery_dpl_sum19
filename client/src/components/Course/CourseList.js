import React from 'react';
import { Grid, Card, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const CourseList = ({title, subtitle, description, workbook, id}) => (
  <Grid>
    <Grid.Row relaxed columns={4}>
        <Grid.Column>
          <Card>
            <Image src='https://cdn.pixabay.com/photo/2013/07/13/10/33/desktop-157479_1280.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header><Link to={{ pathname: `./course/${id}`, state: { id, title, description, workbook, subtitle, } }} >{ title }</Link></Card.Header>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default CourseList;

