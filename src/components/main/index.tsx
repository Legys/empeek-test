import * as React from "react";

import { Col, Row } from "reactstrap";

import Aside from "src/components/main/Aside";
import Comments from "src/components/main/Comments";
import Notes from "src/components/main/Notes";
import { STPageWrapper } from "./styles";
import { INote } from "./Notes/types";
import { insertById } from "src/utils/storage/comments";
import * as uuid from "uuid";
import { IComment } from "./Comments/types";

interface IState {
  selectedNote: INote;
  notes: INote[];
}

class MainPageContainer extends React.Component<any, IState> {
  state = {
    selectedNote: null,
    notes: []
  };

  onNoteSelect = (note: INote) => {
    this.setState({ selectedNote: note });
  };

  handleCommentAdd = (commentText: string) => {
    const comment: IComment = {
      id: uuid(),
      text: commentText
    };
    const updatedNote: INote = insertById(this.state.selectedNote.id, comment);

    const newNotes = this.state.notes.slice(0);
    const note: INote = this.state.notes.find(n => n.id === updatedNote.id);
    note.comments.push(comment);
    this.setState({
      notes: newNotes,
      selectedNote: updatedNote
    });
  };

  handleNoteAdd = (note: INote) => {
    this.setState({ notes: [...this.state.notes, note] });
  };

  componentDidMount() {
    const notes: INote[] = JSON.parse(localStorage.getItem("notes") as string);
    if (notes) {
      this.setState({ notes });
    }
  }

  public render() {
    return (
      <STPageWrapper>
        <Col sm={2}>
          <Aside />
        </Col>
        <Col sm={5}>
          <Notes
            onNoteSelect={this.onNoteSelect}
            onNoteAdd={this.handleNoteAdd}
            notes={this.state.notes}
          />
        </Col>
        <Col sm={4}>
          {this.state.selectedNote && (
            <Comments
              selectedNote={this.state.selectedNote}
              onCommentAdd={this.handleCommentAdd}
            />
          )}
        </Col>
      </STPageWrapper>
    );
  }
}

export default MainPageContainer;
