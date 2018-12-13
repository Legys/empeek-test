import * as React from "react";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import { IComment } from "../../types";
import UserAvatar from "src/components/ui/UserAvatar";
import { Row, Col } from "reactstrap";
import { STGroupItem } from "./styles";
interface IProps {
  item: IComment;
}

const CommentItem = (props: IProps) => (
  <STGroupItem>
    <Row>
      <Col sm={2}>
        <UserAvatar />
      </Col>
      <Col sm={10}>
        {props.item.text.split("\n").map((item, key) => (
          <span key={key}>
            {item}
            <br />
          </span>
        ))}
      </Col>
    </Row>
  </STGroupItem>
);

export default CommentItem;
