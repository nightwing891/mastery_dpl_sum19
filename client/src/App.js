import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
// import Footer from './components/Footer'
import Login from './components/auth/Login';
import FetchUser from './components/auth/FetchUser';
import AdminPage from './components/admin/AdminPage';
import CreateCourse from './components/admin/crud/CreateCourse';
import CreateLesson from './components/admin/crud/CreateLesson';
import CreateUser from './components/admin/crud/CreateUser';
import EditCourse from './components/admin/crud/EditCourse';
import EditLesson from './components/admin/crud/EditLesson';
import EditUser from './components/admin/crud/EditUser';


import CoursePage from './components/Course/CoursePage';


import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/course/:id" component={CoursePage} />
           <Route exact path="/admin-landing" component={AdminPage} />
           <Route exact path="/admin-create-course" component={CreateCourse} />
           <Route exact path="/admin-create-lesson" component={CreateLesson} />
           <Route exact path="/admin-create-user" component={CreateUser} />
           <Route exact path="/admin-edit-course" component={EditCourse} />
           <Route exact path="/admin-edit-lesson" component={EditLesson} />
           <Route exact path="/admin-edit-user" component={EditUser} />
           <Route component={NoMatch} />
          </Switch>
        </Container>
      {/* <Footer /> */}
    </FetchUser>
  </Fragment>
)

export default App;