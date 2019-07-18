import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AllUsers from './AdminUsers/AllUsers.js';

const AdminUsersPage = () => (   
    <>
        <br/>
         <Link to = {{ 
      pathname: './admin-create-user',       
         }} >
        <Button size='small'>Add User</Button>
      </Link>
        <div>
        <h1>All Users</h1>
          <AllUsers />
        </div>
    </>
      )

export default AdminUsersPage;