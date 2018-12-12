import * as React from "react";
import { Form, FormGroup, Input, Button, Row, Col } from "reactstrap";
import { STButton, STButtonText } from "./styles";

class NoteInput extends React.Component {
  public render() {
    return (
      <Form>
        <Row>
          <Col sm={8}>
            <FormGroup>
              <Input type="text" name="email" placeholder="type name here..." />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <STButton color="primary">
              <STButtonText>Add new</STButtonText>
            </STButton>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default NoteInput;
