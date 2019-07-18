import React from "react";
import axios from "axios";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends React.Component {
 state = { users: [], };

  componentDidMount() {
    axios.get("/api/users")
      .then( res => {
        this.setState({ users: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
     .then( res => {
       const { users } = this.state
       this.setState({ users: users.filter( u => u.id !==id )})
       window.location.href = '/admin-users'
     })
  }

 render() {
   return (
     <UserContext.Provider value={{
       ...this.state,
       deleteUser: this.deleteUser
     }}>
       { this.props.children }
     </UserContext.Provider>
   )
 }
};
