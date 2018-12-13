import * as React from "react";

import {
  FormGroup,
  Input,
  Form,
  Row,
  Col,
  FormFeedback,
  Container
} from "reactstrap";

import UserAvatar from "src/components/ui/UserAvatar";

interface IState {
  commentText: string;
  isValid: boolean;
}
interface IProps {
  onCommentAdd: (commentText: string) => void;
  selectedNoteNumber: number;
}

class CommentInput extends React.Component<IProps, IState> {
  readonly state = {
    isValid: true,
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
    const value: string = event.currentTarget.value;
    this.setState({
      commentText: value,
      isValid: value.length > 2
    });
  };

  handleAddComment = () => {
    if (this.state.commentText.length < 3) {
      this.setState({
        isValid: false
      });
    } else if (this.state.isValid) {
      this.props.onCommentAdd(this.state.commentText);
      this.setState({ commentText: "" });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedNoteNumber !== this.props.selectedNoteNumber) {
      this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <Form>
        <Container>
          <Row>
            <Col xs={2}>
              <UserAvatar />
            </Col>
            <Col xs={10}>
              <FormGroup>
                <Input
                  autoFocus
                  invalid={!this.state.isValid}
                  type="textarea"
                  name="text"
                  innerRef={this.inputRef}
                  onKeyDown={this.handleKeyDown}
                  onChange={this.handleChange}
                  value={this.state.commentText}
                />
                {!this.state.isValid && (
                  <FormFeedback>
                    Comment must be more than 2 characters
                  </FormFeedback>
                )}
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}

export default CommentInput;
