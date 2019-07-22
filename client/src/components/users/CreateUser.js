import React, { Component } from 'react';

// Form has the axios call
// handleSubmit calls the course create

class CreateUser extends React.Component {
  // state = { courses: [] }

  // componentDidMount() {
  //   axios.get("/api/courses")
  //     .then( res => {
  //       this.setState({ courses: res.data })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // addCourse = (course) => {
  //  axios.post('/api/courses', { course } )
  //   .then( res => {
  //     const { courses  } = this.state
  //     this.setState({ courses: [...courses, res.data] })
  //   })
  //   .catch( err => {
  //     console.log(err)
  //   })
  // }

  render() {
    const { title, subtitle, description, workbook, id } = this.props
    return(
      <>
    
      </>

    )
  }
}



export default CreateUser;