import React from 'react';
import { Grid, Card,} from "semantic-ui-react";
import { Link } from 'react-router-dom';

const Course = ({title, subtitle, description, workbook, id, }) => (
  <Grid>
    <Grid.Row relaxed columns={4}>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header><Link to={{ pathname: './admin-lessons', state: { id, title, description, workbook, subtitle }  }} >{ title }</Link></Card.Header>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Course;


// class Course extends Component {
//   state = { editing : false }

//   toggleEdit = () => this.setState({ editing: !this.state.editing })
//   render() {
//     const { title, subtitle, description, workbook, id , remove, edit } = this.props
//     const { editing } = this.state
//     return(
//       <Segment>
//         { editing ?
//            <CourseForm {...this.props} close={this.toggleEdit } edit={this.props.edit} />
//            :
//            <div>
//             <Header>{ title }</Header>
//            </div>
//            }
//            <Button icon color="yellow" onClick={this.toggleEdit}>
//           <Icon name='pencil' />
//         </Button>
//         <Button icon color="red" onClick={() => remove(id)}>
//           <Icon name='trash' />
//         </Button>
//       </Segment>

//     )
//   }
// }



// export default Course;