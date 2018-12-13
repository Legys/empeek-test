import * as React from "react";

import { Col, Row } from "reactstrap";

import Aside from "src/components/main/Aside";
import Comments from "src/components/main/Comments";
import Notes from "src/components/main/Notes";
import { STPageWrapper } from "./styles";
import { INote } from "./Notes/types";

interface IState {
  selectedNote: INote;
}

class MainPageContainer extends React.Component {
  state = {
    selectedNote: null
  };

  onNoteSelect = (note: INote) => {
    this.setState({ selectedNote: note });
  };

  public render() {
    return (
      <STPageWrapper>
        <Col sm={2}>
          <Aside />
        </Col>
        <Col sm={5}>
          <Notes onNoteSelect={this.onNoteSelect} />
        </Col>
        <Col sm={4}>
          {this.state.selectedNote && (
            <Comments selectedNote={this.state.selectedNote} />
          )}
        </Col>
      </STPageWrapper>
    );
  }
}

export default MainPageContainer;
