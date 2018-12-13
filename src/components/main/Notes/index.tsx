import * as React from "react";

import { CardBody } from "reactstrap";

import NoteInput from "src/components/main/Notes/NoteInput";
import NotesList from "src/components/main/Notes/NotesList";
import CardWrapper from "src/components/ui/CardWrapper";
import { INote } from "./types";

interface IState {
  notes: INote[];
  // selectedNoteId: string;
}

interface IProps {
  onNoteSelect(note: INote): void;
}

class Notes extends React.Component<IProps, IState> {
  readonly state = {
    notes: []
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

  render() {
    return (
      <CardWrapper title="Items">
        <CardBody>
          <NoteInput onNoteAdd={this.handleNoteAdd} />
          <NotesList
            notes={this.state.notes}
            onNoteSelect={this.props.onNoteSelect}
          />
        </CardBody>
      </CardWrapper>
    );
  }
}

export default Notes;
