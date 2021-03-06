import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UserConsumer } from '../../providers/UserProvider';

class UserShow extends React.Component {
  state = { user: {} }

  // componentDidMount = () => {
  //   axios.get(`api/users/${this.props.match.params.id}`)
  //   .then( res => {
  //   this.setState(res.data)}
  //   )
  // }

  render() {
    const { id, email, name } = this.props.location.state.user
    const { deleteUser } = this.props.value
    return (
      <>
        <h1 style={{ padding: '1em', margin: '1em' }}>{name}</h1>
        <p style={{ padding: '1em', margin: '1em' }}>Email: {email}</p>
        <Button
          size='small'
          color="red"
          onClick={() => deleteUser(id)}
          style={{ padding: '1em', margin: '1em' }}
        >
          Delete User
        </Button>
      </>
    )
  }
}

export default class ConnectedUserShow extends React.Component {
  render() {
    return (
      <UserConsumer>
        {value => <UserShow {...this.props} value={value} />}
      </UserConsumer>
    )
  }
}