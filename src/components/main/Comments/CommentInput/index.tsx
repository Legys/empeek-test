import * as React from "react";
import { FormGroup, Input, Form, Row, Col } from "reactstrap";
import UserAvatar from "src/components/ui/UserAvatar";

interface IState {
  commentText: string;
}
interface IProps {
  onCommentAdd: (commentText: string) => void;
  selectedNoteNumber: number;
}

class CommentInput extends React.Component<IProps, IState> {
  readonly state = {
    commentText: ""
  };

  inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  handleKeyDown = (event: React.KeyboardEvent) => {
    const keyCode: number = event.keyCode;
    const ctrlOrCmdKey: boolean = event.ctrlKey || event.metaKey;
    if (keyCode === 13 && ctrlOrCmdKey) {
      this.handleAddComment();
    }
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ commentText: event.currentTarget.value });
  };

  handleAddComment = () => {
    this.props.onCommentAdd(this.state.commentText);
    this.setState({ commentText: "" });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedNoteNumber !== this.props.selectedNoteNumber) {
      this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <Form>
        <Row>
          <Col sm={2}>
            <UserAvatar />
          </Col>
          <Col sm={10}>
            <FormGroup>
              <Input
                autoFocus
                type="textarea"
                name="text"
                innerRef={this.inputRef}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleChange}
                value={this.state.commentText}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default CommentInput;
