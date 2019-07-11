import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AllCourses from './AdminCourses/AllCourses';

const AdminPage = () => (   
        <>
        <br/>
         <Link to = {{ 
      pathname: './admin-create-course',       
         }} >
        <Button size='small'>Create Course</Button>
      </Link>
        <div>
        <h1>All Courses</h1>
          <AllCourses />
        </div>
        </>
      )

export default AdminPage;