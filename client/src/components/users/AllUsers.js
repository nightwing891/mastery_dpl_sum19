import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
// import { CourseConsumer } from '../../../providers/CourseProvider';

class AllUsers extends Component {
  state = { users:[] }

  componentDidMount = () => {
  axios.get("/api/users")
  .then(res => (
    this.setState({users: res.data})))
  }
  
  renderUsers = () => {
    const { users } = this.state
    return users.map( user => <User key={user.id} {...user} /> )
  }

  render() {
    return(
      <>  
        {this.renderUsers()}
      </>
    )
  }
}

export default AllUsers;

// This goes in a form with a button from this page. Put it in the provider from the context API. Look at the context API lesson.
  // updateUser = (id, user) => {
  //   axios.put(`/api/users/${id}`, user)
  //     .then( res => this.setState({ user: res.data, }) )
  // }