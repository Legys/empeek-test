import * as React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

interface IProps {
  onModalDone: () => void;
  onModalToggle: () => void;
  isOpen: boolean;
}

class DeleteModal extends React.Component<IProps> {
  render() {
    return (
      <Modal toggle={this.props.onModalToggle} isOpen={this.props.isOpen}>
        <ModalHeader toggle={this.props.onModalToggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onModalDone}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={this.props.onModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default DeleteModal;
