import * as React from "react";
import CardWrapper from "src/components/ui/CardWrapper";
import CommentsList from "./CommentsList";
import { INote } from "../Notes/types";
import { IComment } from "./types";

interface IProps {
  selectedNote: INote;
}

class Comments extends React.Component<IProps> {
  public render() {
    const comments: IComment[] = this.props.selectedNote
      ? this.props.selectedNote.comments
      : [];
    return (
      <CardWrapper title="Comments">
        {comments ? (
          <CommentsList comments={comments} />
        ) : (
          <h2>Nothing here</h2>
        )}
      </CardWrapper>
    );
  }
}

export default Comments;
