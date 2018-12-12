import * as React from "react";
import { Form, FormGroup, Input, Button, Row, Col } from "reactstrap";
import { STButton, STButtonText } from "./styles";
import * as uuid from "uuid";
import { INote } from "../types";

interface IState {
  noteTitle: string;
}

interface IProps {
  onNoteAdd: (note: INote) => void;
}

class NoteInput extends React.Component<IProps, IState> {
  readonly state = {
    noteTitle: ""
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ noteTitle: event.currentTarget.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.createNewNote();
    this.setState({ noteTitle: "" });
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
                type="text"
                name="noteTitle"
                placeholder="type name here..."
                onChange={this.handleChange}
                value={this.state.noteTitle}
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <STButton color="primary" type="submit">
              <STButtonText>Add new</STButtonText>
            </STButton>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default NoteInput;
