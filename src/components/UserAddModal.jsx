import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UserModal({
  user,
  updateUser,
  show,
  handleClose,
  onSubmit,
  onUpdate,
}) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{updateUser ? "Update User" : "Add User"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Form.Control
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (updateUser) {
              onUpdate({ id: user.id, username, phone });
              setUsername("");
              setPhone("");
              handleClose();
            } else {
              onSubmit({ id: Date.now(), username, phone });
              setUsername("");
              setPhone("");
              handleClose();
            }
          }}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;
