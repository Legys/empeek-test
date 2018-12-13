import * as React from "react";
import { ListGroup } from "reactstrap";
import CommentItem from "./CommentItem";
import { IComment } from "../types";

interface IProps {
  comments: IComment[];
}

const CommentsList = (props: IProps) => (
  <ListGroup flush>
    {props.comments.map((item: IComment) => (
      <CommentItem key={item.id} item={item} />
    ))}
  </ListGroup>
);

export default CommentsList;
