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
import update from "immutability-helper";

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

    const noteIndex: number = this.state.notes.findIndex(
      n => n.id === updatedNote.id
    );

    const newNotes: INote[] = update(this.state.notes, {
      [noteIndex]: {
        comments: {
          $push: [comment]
        }
      }
    });

    this.setState({
      notes: newNotes,
      selectedNote: updatedNote
    });
  };

  handleNoteDelete = (id: string) => {
    console.log("====================================");
    console.log(id);
    console.log("====================================");
  };

  handleNoteAdd = (note: INote) => {
    this.setState({ notes: [...this.state.notes, note] });
  };

  getId = (): string => {
    if (this.state.selectedNote) {
      return this.state.selectedNote.id;
    }
    return null;
  };

  getNumber = (): number => {
    if (this.state.selectedNote) {
      const selectedNoteNumber =
        this.state.notes.findIndex(
          (note: INote) => note.id === this.state.selectedNote.id
        ) + 1;
      return selectedNoteNumber;
    }
    return null;
  };

  componentDidMount() {
    const notes: INote[] = JSON.parse(localStorage.getItem("notes") as string);
    if (notes) {
      this.setState({ notes });
    }
  }

  public render() {
    const selectedId: string = this.getId();
    const selectedNoteNumber: number = this.getNumber();

    return (
      <STPageWrapper>
        <Col sm={2}>
          <Aside />
        </Col>
        <Col sm={5}>
          <Notes
            onNoteSelect={this.onNoteSelect}
            onNoteAdd={this.handleNoteAdd}
            onNoteDelete={this.handleNoteDelete}
            notes={this.state.notes}
            selectedNoteId={selectedId}
          />
        </Col>
        <Col sm={4}>
          {this.state.selectedNote && (
            <Comments
              selectedNoteNumber={selectedNoteNumber}
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
