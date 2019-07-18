import React, { Component } from "react";
import LessonContent from "./LessonContent";
import LessonHeader from "./LessonHeader";
import Video from "./Video";
import LessonDescription from "./LessonDescription";
import LikeIt from "./LikeIt";

class AdminLessonPage extends React.Component {
  state = {};

  render() {
    const {
      id,
      instructor,
      title,
      subtitle,
      description,
      length,
      body
    } = this.props.location.state;
    return (
      <>
        {/* Put Button */}
        <LessonHeader lesson_id={id} title={title} />
        <LessonContent />
        <Video />
        <LessonDescription description={description} />
        <LikeIt />
      </>
    );
  }
}

export default AdminLessonPage;
