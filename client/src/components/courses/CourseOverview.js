import React from "react";
import { Header, Button, Divider, Grid, Icon, Search, Segment } from "semantic-ui-react";

const CourseOverview = ({lessons}) => (

  <Segment placeholder>
    <Grid columns={3} stackable textAlign='center'>
        
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon as='h1'>
            <Icon name='boxes' circular />
              {
              lessons.length + ' Lessons'
              }
          </Header>
        </Grid.Column>
  
        <Grid.Column>
          <Header icon as='h1'>
            <Icon name='book' circular />
              Workbook
          </Header>
        </Grid.Column>
          
        <Grid.Column>
          <Header icon as='h1'>
            <Icon name='world' circular />
              Anytime, Anywhere
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default CourseOverview;