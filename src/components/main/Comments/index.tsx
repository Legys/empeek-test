import * as React from "react";
import CardWrapper from "src/components/ui/CardWrapper";
import CommentsList from "./CommentsList";

class Comments extends React.Component {
  readonly state = {
    comments: []
  };

  public render() {
    return (
      <CardWrapper title="Comments">
        <CommentsList comments={this.state.comments} />
      </CardWrapper>
    );
  }
}

export default Comments;
