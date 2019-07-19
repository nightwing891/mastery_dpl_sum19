import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import AllCourses from './AdminCourses/AllCourses';

const AdminPage = () => (
  <>
    <div style={{

      color: 'black',


    }}>
      <br />
      <Link to={{
        pathname: './admin-create-course',
      }} >
        <Button size='small' floated="right" style={{ padding: '1em', margin: '1em' }}>Create Course</Button>
      </Link>
      <div>
        <h1 style={{ padding: '1em', margin: '1em' }}>All Courses</h1>
        <AllCourses />
      </div>
    </div>
  </>
)

export default AdminPage;