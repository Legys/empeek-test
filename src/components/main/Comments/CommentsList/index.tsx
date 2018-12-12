import * as React from "react";
import { ListGroup } from "reactstrap";
import { IComment } from "../../Notes/types";
import CommentItem from "./CommentItem";

interface IProps {
  comments: IComment[];
}

const CommentsList = (props: IProps) => (
  <ListGroup>
    {props.comments.map((item: IComment) => (
      <CommentItem key={item.id} item={item} />
    ))}
  </ListGroup>
);

export default CommentsList;
