import React, { Component } from 'react';
import LessonList from './LessonList';
import axios from 'axios';

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
    const { lessons } = this.state
    return(         

  <div>
  <h1>All Lessons</h1>
    <ul>
      { lessons.map( lesson => <LessonList key={lesson.id} {...lesson} /> )}
    </ul>
  </div> 
   
    )
  }
}


export default AllLessons;