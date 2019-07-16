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
}) => {
  const nextLesson = () => {
    return parseInt(lesson_id) + 1;
  };

  return (
    <Container>
      <Header as="h1">{title}</Header>
      <Button size="small" onClick={() => history.goBack()}>
        All Lessons
      </Button>
      {/* <Link
        to={{
          pathname: `/admin/lesson/${nextLesson()}`,
          state: {
            lesson_id,
            instructor,
            title,
            subtitle,
            description,
            length,
            body,
            complete
          }
        }}
      >
        <Button size="small">Next Lesson</Button>
      </Link> */}
    </Container>
  );
};

export default withRouter(LessonHeader);
