import * as React from "react";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import { IComment } from "src/components/main/Notes/types";

interface IProps {
  item: IComment;
}

const CommentItem = (props: IProps) => (
  <ListGroupItem>{props.item.title}</ListGroupItem>
);

export default CommentItem;
