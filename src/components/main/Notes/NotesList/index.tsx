import * as React from "react";
import { ListGroup } from "reactstrap";
import { INote } from "../types";
import NoteItem from "./NoteItem";

interface IProps {
  notes: INote[];
}

const NotesList = (props: IProps) => {
  return (
    <ListGroup flush>
      {props.notes.map((note: INote) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ListGroup>
  );
};

export default NotesList;
