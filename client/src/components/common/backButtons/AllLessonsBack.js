import React from "react";
import { Container, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const AllLessonsBack = ({ history }) => (
  <Container>
    <Button floated='left' size="small" onClick={() => history.goBack()} style={{ padding: '1em', margin: '1em' }} >
      All Lessons
    </Button>
  </Container>
);

export default withRouter(AllLessonsBack);