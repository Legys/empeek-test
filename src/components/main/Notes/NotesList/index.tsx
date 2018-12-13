import * as React from "react";
import { ListGroup } from "reactstrap";
import { INote } from "../types";
import NoteItem from "./NoteItem";

interface IProps {
  notes: INote[];
  onNoteSelect: (note: INote) => void;
  onNoteDelete: (id: string) => void;
  selectedNoteId: string;
}

const NotesList = (props: IProps) => {
  return (
    <ListGroup flush>
      {props.notes.map((note: INote) => (
        <NoteItem
          key={note.id}
          note={note}
          onNoteSelect={props.onNoteSelect}
          onNoteDelete={props.onNoteDelete}
          selectedNoteId={props.selectedNoteId}
        />
      ))}
    </ListGroup>
  );
};

export default NotesList;
