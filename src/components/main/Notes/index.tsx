import * as React from "react";

import { CardBody } from "reactstrap";

import NoteInput from "src/components/main/Notes/NoteInput";
import NotesList from "src/components/main/Notes/NotesList";
import CardWrapper from "src/components/ui/CardWrapper";

class Notes extends React.Component {
  public render() {
    return (
      <CardWrapper title="Items">
        <CardBody>
          <NoteInput />
          <NotesList />
        </CardBody>
      </CardWrapper>
    );
  }
}

export default Notes;
