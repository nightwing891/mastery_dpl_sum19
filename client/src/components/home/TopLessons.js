import React from 'react'
import { Grid, Header } from 'semantic-ui-react'  
import { Video } from 'cloudinary-react'; 

const TopLessons = ({}) => (
  <>
    <Header as='h2' inverted textAlign='center' 
    style={{ 
      fontSize: '4em',
       color: '#8168B1' }}>
      Top Lessons
    </Header>
        <div>
      <Grid >
        <Grid.Row columns={3} style={{textAlign:'center'}}>
        <Grid.Column>
            <Video
              cloudName='dtajlsppz'
              publicId='Ivy1'
              width='300'
              controls='true'
            />
        </Grid.Column>
        <Grid.Column>
            <Video
              cloudName='dtajlsppz'
              publicId='Ivy5'
              width='300'
              controls='true'
              loop='true'
              autoplay='true'

            />
        </Grid.Column>
        <Grid.Column>
            <Video
              cloudName='dtajlsppz'
              publicId='Ivy3'
              width='300'
              controls='true'
             />
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
  </>
)
    export default TopLessons;