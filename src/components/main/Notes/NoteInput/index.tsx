import * as React from "react";
import { Form, FormGroup, Input, Button, Row, Col } from "reactstrap";
import { STButton, STButtonText } from "./styles";
import * as uuid from "uuid";
import { INote } from "../types";
import FormFeedback from "reactstrap/lib/FormFeedback";

interface IState {
  noteTitle: string;
  isValid: boolean;
}

interface IProps {
  onNoteAdd: (note: INote) => void;
}

class NoteInput extends React.Component<IProps, IState> {
  readonly state = {
    noteTitle: "",
    isValid: true
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    this.setState({ noteTitle: value, isValid: value.length > 2 });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.state.noteTitle.length < 3) {
      this.setState({ isValid: false });
    } else if (this.state.isValid) {
      this.createNewNote();
      this.setState({ noteTitle: "" });
    }
  };

  createNewNote() {
    const note: INote = {
      id: uuid(),
      title: this.state.noteTitle,
      comments: []
    };
    const notes: INote[] = JSON.parse(localStorage.getItem("notes") as string);
    if (notes) {
      notes.push(note);
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      localStorage.setItem("notes", JSON.stringify([note]));
    }

    this.props.onNoteAdd(note);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={8}>
            <FormGroup>
              <Input
                invalid={!this.state.isValid}
                type="text"
                name="noteTitle"
                placeholder="type name here..."
                onChange={this.handleChange}
                value={this.state.noteTitle}
              />
              {!this.state.isValid && (
                <FormFeedback>
                  Title must be more than 2 characters
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
          <Col sm={4}>
            <STButton
              color="primary"
              type="submit"
              disabled={!this.state.isValid}
            >
              <STButtonText>Add new</STButtonText>
            </STButton>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default NoteInput;
