import * as React from "react";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import { IComment } from "../../types";

interface IProps {
  item: IComment;
}

const CommentItem = (props: IProps) => (
  <ListGroupItem>{props.item.title}</ListGroupItem>
);

export default CommentItem;
