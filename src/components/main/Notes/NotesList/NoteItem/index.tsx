import * as React from "react";
import { INote } from "../../types";
import { ListGroupItem, Button } from "reactstrap";
import { STListText, STBadge, STButtonText, STGroupItem } from "./styles";

interface IProps {
  note: INote;
  onNoteSelect: (note: INote) => void;
}

const NoteItem = (props: IProps) => {
  const commentsLength = props.note.comments.length;
  return (
    <STGroupItem
      className="d-flex justify-content-between align-items-centers"
      onClick={() => props.onNoteSelect(props.note)}
    >
      <STListText>
        <span>{props.note.title}</span>
        {commentsLength > 0 && <STBadge pill>{commentsLength}</STBadge>}
      </STListText>
      <Button outline color="danger">
        <STButtonText>Delete</STButtonText>
      </Button>
    </STGroupItem>
  );
};

export default NoteItem;
