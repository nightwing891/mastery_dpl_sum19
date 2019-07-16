import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

const LessonHeader = ({
  lesson_id,
  instructor,
  title,
  subtitle,
  description,
  length,
  body,
  complete,
  history
}) => (
  <Container>
    <Header as="h1">{title}</Header>
    <Button size="small" onClick={() => history.goBack()}>
      All Lessons
    </Button>
  </Container>
);

export default withRouter(LessonHeader);
