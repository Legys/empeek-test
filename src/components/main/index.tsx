import * as React from "react";

import { Col, Row } from "reactstrap";

import Aside from "src/components/main/Aside";
import Comments from "src/components/main/Comments";
import Notes from "src/components/main/Notes";

class MainPageContainer extends React.Component {
  public render() {
    return (
      <Row>
        <Col sm={3}>
          <Aside />
        </Col>
        <Col sm={5}>
          <Notes />
        </Col>
        <Col sm={4}>
          <Comments />
        </Col>
      </Row>
    );
  }
}

export default MainPageContainer;
