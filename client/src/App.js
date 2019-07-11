import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Login from './components/auth/Login';
import FetchUser from './components/auth/FetchUser';
import AdminPage from './components/admin/AdminPage';
import CreateCourse from './components/admin/crud/CreateCourse';
import CreateLesson from './components/admin/crud/CreateLesson';
import CreateUser from './components/admin/crud/CreateUser';
import EditCourse from './components/admin/AdminCourses/AllCourses';
import EditLesson from './components/admin/crud/EditLesson';
import EditUser from './components/admin/crud/EditUser';
import AllLessons from './components/admin/AdminLesson/AllLessons';
import AdminRoute from './components/auth/AdminRoutes';
import ProtectedRoute from './components/auth/ProtectedRoutes';


import CoursePage from './components/Course/CoursePage';
import LessonPage from './components/Lesson/LessonPage';


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
            <ProtectedRoute exact path="/course/:id" component={CoursePage} />
            <ProtectedRoute exact path="/lesson/:id" component={LessonPage} />
            <AdminRoute exact path="/admin-landing" component={AdminPage} />
            <AdminRoute exact path="/admin-lessons" component={AllLessons} />
            <AdminRoute exact path="/admin-create-course" component={CreateCourse} />
            <AdminRoute exact path="/admin-create-lesson" component={CreateLesson} />
            <AdminRoute exact path="/admin-create-user" component={CreateUser} />
            <AdminRoute exact path="/admin-edit-course" component={EditCourse} />
            <AdminRoute exact path="/admin-edit-lesson" component={AllLessons} />
            <AdminRoute exact path="/admin-edit-user" component={EditUser} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      <Footer />
    </FetchUser>
  </Fragment>
)

export default App;