import * as React from "react";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import { IComment } from "../../types";

interface IProps {
  item: IComment;
}

const CommentItem = (props: IProps) => (
  <ListGroupItem>
    {props.item.text.split("\n").map((item, key) => (
      <span key={key}>
        {item}
        <br />
      </span>
    ))}
  </ListGroupItem>
);

export default CommentItem;
