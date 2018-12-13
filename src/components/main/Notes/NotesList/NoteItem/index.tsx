import * as React from "react";
import { INote } from "../../types";
import { ListGroupItem, Button } from "reactstrap";
import { STListText, STBadge, STButtonText, STGroupItem } from "./styles";

interface IProps {
  note: INote;
  onNoteSelect: (note: INote) => void;
  selectedNoteId: string;
}

const NoteItem = (props: IProps) => {
  const commentsLength: number = props.note.comments.length;
  const isActive: boolean = props.note.id === props.selectedNoteId;
  return (
    <STGroupItem
      className="d-flex justify-content-between align-items-centers"
      onClick={() => props.onNoteSelect(props.note)}
      isActive={isActive}
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
