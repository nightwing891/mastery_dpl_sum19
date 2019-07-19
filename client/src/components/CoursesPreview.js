import React from 'react'
import { Grid, Header } from 'semantic-ui-react'  
import { Video } from 'cloudinary-react'; 

const CoursesPreview = ({}) => (
  <>
    <Header as='h2' textAlign='center'>
      Top Lessons
    </Header>
    <Grid columns='equal'>
      <Grid.Row columns='equal'>
        <Grid.Column>
          <p>
            <span>
            <Video
              cloudName='dtajlsppz'
              publicId='Ivy1'
              width='300'
              controls='true'
            />
            </span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>
            <Video
              cloudName='dtajlsppz'
              publicId='Ivy2'
              width='300'
              controls='true'
            />
            </span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>
            <Video
              cloudName='dtajlsppz'
              publicId='Ivy3'
              width='300'
              controls='true'
             />
            </span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
)
    export default CoursesPreview;