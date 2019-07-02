import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Login from './components/Login';
import CoursePage from './components/Course/CoursePage';
// import Register from './components/Register';

import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/course" component={CoursePage} />
        <Route component={NoMatch} />
      </Switch>
    </Container>

    <Footer />
  </Fragment>
)

export default App;