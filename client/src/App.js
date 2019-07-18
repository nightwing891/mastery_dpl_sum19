import React, { Fragment, } from 'react';
import AdminPage from './components/admin/AdminPage';
import AdminCrud from './components/admin/AdminCrud';
import AllLessons from './components/admin/AdminLesson/AllLessons';
import AdminRoute from './components/auth/AdminRoutes';
import CreateCourse from './components/admin/crud/CreateCourse';
import CreateLesson from './components/admin/crud/CreateLesson';
import CreateUser from './components/admin/crud/CreateUser';
import EditCourse from './components/admin/AdminCourses/AllCourses';
import EditLesson from './components/admin/crud/EditLesson';
import EditUser from './components/admin/crud/EditUser';
import LessonContent from './components/admin/AdminLesson/LessonContent';
import FetchUser from './components/auth/FetchUser';
import Footer2 from './components/Footer2'
import Login from './components/auth/Login';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoutes';
import CoursePage from './components/Course/CoursePage';
import LessonPage from './components/Lesson/LessonPage';
import AdminLessonPage from './components/admin/AdminLesson/AdminLessonPage';


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
            <AdminRoute exact path="/admin/lesson/:id" component={AdminLessonPage} />
            <AdminRoute exact path="/admin-crud" component={AdminCrud} />
            <AdminRoute exact path="/admin-courses" component={AdminPage} />
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
      <Footer2 />
    </FetchUser>
  </Fragment>
)

export default App;