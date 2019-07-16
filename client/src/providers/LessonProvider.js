import React, { Component } from "react";
import axios from "axios";

const LessonContext = React.createContext();
export const LessonConsumer = LessonContext.Consumer;

export class LessonProvider extends Component {

  state = { lessons: [] }

  

  render() {
    return (
      <LessonContext.Provider value={{
        ...this.state,
        deleteLesson: this.deleteLesson,
        updateLesson: this.updateLesson,
        addLesson: this.addLesson,
      }}>
        { this.props.children }
      </LessonContext.Provider>
    )
  }
}