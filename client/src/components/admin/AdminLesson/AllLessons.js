import React, { Component } from 'react';
import LessonList from './LessonList';
import axios from 'axios';
import AdminHeader from '../AdminCourses/AdminHeader';

class AllLessons extends React.Component {
  state = {lessons: []}

  componentDidMount(){
    const { id } = this.props.location.state
    axios.get(`/api/courses/${id}/lessons`)
    .then( res => {
      this.setState({ lessons: res.data })
    })
    .catch ( err => {
      console.log(err)
    })
  }




  render() {
    const { id, title } = this.props.location.state
    const { lessons } = this.state
    return(  
        

    <div>
      <AdminHeader
        course_id={id}
        title={title}
      />
      <h1>All Lessons</h1>
         <ul>
         { lessons.map( lesson => <LessonList key={lesson.id} {...lesson} /> )}
      </ul>

      {/* <Button 
        size='small' 
        color="red"
        onClick={()=> remove(id)}
        >Delete Course</Button> */}
       
     </div>

   
    )
  }
}


export default AllLessons;