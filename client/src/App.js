import React, { Fragment, } from 'react';
import AdminCoursePage from './components/courses/AdminCoursePage';
import AdminUsersPage from './components/users/AdminUsersPage';
import AdminLessonIndex from './components/lessons/AdminLessonIndex';
import AdminRoute from './components/common/auth/AdminRoutes';
import CreateCourse from './components/courses/CreateCourse';
import CreateLesson from './components/lessons/CreateLesson';
import CreateUser from './components/users/CreateUser';
import EditCourse from './components/courses/AdminCourseIndex';
import AdminCourseIndex from './components/courses/AdminCourseIndex';
import EditUser from './components/users/EditUser';
import FetchUser from './components/common/auth/FetchUser';
import Footer from './components/common/Footer';
import Login from './components/common/auth/Login';
import Home from './components/home/Home';
import NoMatch from './components/common/NoMatch';
import Navbar from './components/common/nav/Navbar';
import ProtectedRoute from './components/common/auth/ProtectedRoutes';
import CoursePage from './components/courses/CoursePage';
import LessonPage from './components/lessons/LessonPage';
import UserShow from './components/users/UserShow';
import AdminLessonPage from './components/lessons/AdminLessonPage';
import { Switch, Route, } from 'react-router-dom';
import { Container } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
      <FetchUser>

        <div style={{ width: '100%', background: '#8168B1' }}>
          <Container style={{ background: '#F5F5F5' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/course/:id" component={CoursePage} />
              <ProtectedRoute exact path="/lesson/:id" component={LessonPage} />
              <AdminRoute exact path="/admin-courses" component={AdminCourseIndex} />
              <AdminRoute exact path="/admin-create-course" component={CreateCourse} />
              <AdminRoute exact path="/admin-edit-course" component={EditCourse} />
              <AdminRoute exact path="/admin-course/:id" component={AdminCoursePage} />
              <AdminRoute exact path="/admin-create-lesson" component={CreateLesson} />
              <AdminRoute exact path="/admin-edit-lesson" component={AdminLessonIndex} />
              <AdminRoute exact path="/admin/lesson/:id" component={AdminLessonPage} />
              <AdminRoute exact path="/admin-users" component={AdminUsersPage} />
              <AdminRoute exact path="/admin-create-user" component={CreateUser} />
              <AdminRoute exact path="/admin-edit-user" component={EditUser} />
              <AdminRoute exact path="/users/:id" component={UserShow} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </div>

        <Footer />
      </FetchUser>
  </Fragment>
)

export default App;