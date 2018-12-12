import * as React from "react";
import { Form, FormGroup, Input, Button, Row, Col } from "reactstrap";

class NoteInput extends React.Component {
  public render() {
    return (
      <Form>
        <Row>
          <Col sm={9}>
            <FormGroup>
              <Input type="text" name="email" placeholder="type name here..." />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <Button color="primary">Add new</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default NoteInput;
