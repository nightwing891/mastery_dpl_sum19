import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const AdminCrud = () => ( 
  <>
    <div>
    <Link to = {{ 
      pathname: './admin-create-course', 
      
    }} >
    <Button size='massive'>Create Course</Button>
    </Link>
    <Link to = {{ 
      pathname: `./admin-create-lesson`
    }} >
    <Button size='massive'>Create Lesson</Button>
    </Link>
    <Link to = {{ 
      pathname: `./admin-create-user`
    }} >
    <Button size='massive'>Create User</Button>
    </Link>
    <Link to = {{ 
      pathname: `./admin-edit-course`
    }} >
    <Button size='massive'>Edit Course</Button>
    </Link>
    <Link to = {{ 
      pathname: `./admin-edit-course`
    }} >
    <Button size='massive'>Edit Lesson</Button>
    </Link>
    <Link to = {{ 
      pathname: `./admin-edit-user`
    }} >
    <Button size='massive'>Edit User</Button>
    </Link>
  </div>
  </>
  )



export default AdminCrud;