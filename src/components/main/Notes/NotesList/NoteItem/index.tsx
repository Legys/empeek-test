import * as React from "react";
import { INote } from "../../types";
import { ListGroupItem } from "reactstrap";

interface IProps {
  note: INote;
}

const NoteItem = (props: IProps) => {
  return (
    <ListGroupItem>
      {props.note.title} {props.note.comments.length}
      {/* <STButton /> */}
    </ListGroupItem>
  );
};

export default NoteItem;
