import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AllUsers from './AdminUsers/AllUsers.js';

const AdminUsersPage = () => (
  <>
    <br />
    <Link to={{
      pathname: './admin-create-user',
    }} >
      <Button size='small' floated="right" style={{ padding: '1em', margin: '1em' }}>Add User</Button>
    </Link>
    <div>
      <h1 as="h1" style={{ padding: '1em', margin: '1em' }}>All Users</h1>
      <AllUsers />
    </div>
  </>
)

export default AdminUsersPage;