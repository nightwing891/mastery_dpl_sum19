import React from 'react'
import { Grid, Header } from 'semantic-ui-react'  
import { Video } from 'cloudinary-react'; 

const CoursesPreview = ({}) => (
  <>
    <Header as='h2' inverted textAlign='center' 
    style={{ 
      fontSize: '4em',
       color: '#8168B1' }}>
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
              publicId='Ivy5'
              width='300'
              controls='true'
              loop='true'
              autoplay='true'

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