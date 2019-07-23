import React, { Fragment, } from 'react';
import AdminPage from './components/admin/AdminPage';
import AdminUsersPage from './components/admin/AdminUsersPage';
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
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoutes';
import CoursePage from './components/Course/CoursePage';
import LessonPage from './components/Lesson/LessonPage';
import UserShow from './components/admin/UserShow';
import AdminLessonPage from './components/admin/AdminLesson/AdminLessonPage';
import { Switch, Route, } from 'react-router-dom';
import { Container, Divider, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>

      <div
        style={{ width: '100%', background: '#8168B1' }}
      >
        <Container style={{ background: '#F5F5F5' }}>
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
            <AdminRoute exact path="/admin-users" component={AdminUsersPage} />
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