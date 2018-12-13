import * as React from "react";
import CardWrapper from "src/components/ui/CardWrapper";
import CommentsList from "./CommentsList";
import { INote } from "../Notes/types";
import { IComment } from "./types";
import { CardBody } from "reactstrap";
import CommentInput from "./CommentInput";

interface IProps {
  selectedNote: INote;
  onCommentAdd: (commentText: string) => void;
}

const Comments = (props: IProps) => {
  const comments: IComment[] = props.selectedNote.comments;
  return (
    <CardWrapper title="Comments">
      <CardBody>
        {comments.length > 0 ? (
          <CommentsList comments={comments} />
        ) : (
          <h2>Nothing here</h2>
        )}
        <CommentInput onCommentAdd={props.onCommentAdd} />
      </CardBody>
    </CardWrapper>
  );
};

export default Comments;
