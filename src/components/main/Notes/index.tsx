import * as React from "react";

import { CardBody } from "reactstrap";

import NoteInput from "src/components/main/Notes/NoteInput";
import NotesList from "src/components/main/Notes/NotesList";
import CardWrapper from "src/components/ui/CardWrapper";
import { INote } from "./types";

interface IProps {
  notes: INote[];
  onNoteSelect: (note: INote) => void;
  onNoteAdd: (note: INote) => void;
}

class Notes extends React.Component<IProps> {
  render() {
    return (
      <CardWrapper title="Items">
        <CardBody>
          <NoteInput onNoteAdd={this.props.onNoteAdd} />
          <NotesList
            notes={this.props.notes}
            onNoteSelect={this.props.onNoteSelect}
          />
        </CardBody>
      </CardWrapper>
    );
  }
}

export default Notes;
