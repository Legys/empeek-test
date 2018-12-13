import * as React from "react";
import CardWrapper from "src/components/ui/CardWrapper";
import CommentsList from "./CommentsList";
import { INote } from "../Notes/types";
import { IComment } from "./types";
import CommentInput from "./CommentInput";
import { STListWrapper, STText } from "./styles";

interface IProps {
  selectedNote: INote;
  onCommentAdd: (commentText: string) => void;
}

const Comments = (props: IProps) => {
  const comments: IComment[] = props.selectedNote.comments;
  return (
    <CardWrapper title="Comments">
      <STListWrapper>
        {comments.length > 0 ? (
          <CommentsList comments={comments} />
        ) : (
          <STText>
            <img src="/img/chat.png" alt="" width="50px" height="50px" />
            Leave your comments in the field below
          </STText>
        )}
      </STListWrapper>
      <CommentInput onCommentAdd={props.onCommentAdd} />
    </CardWrapper>
  );
};

export default Comments;
