import { Card, Col, Button } from "react-bootstrap";
import "./UserCard.css";

function UserCard({ user, onDelete, onUpdate }) {
  const { username, phone, id } = user;
  return (
    <Col sm={4} md={3} className="mb-3">
      <Card style={{ width: "15rem" }} className="card">
        <Card.Body style={{ fontWeight: "400", fontSize: "18px" }}>
          <p>id: {id}</p>
          <p>username: {username}</p>
          <p>phone: {phone}</p>
          <Button
            variant="secondary"
            className="mr-5"
            onClick={() => onUpdate({ id, username, phone })}>
            Update
          </Button>
          <Button variant="danger" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserCard;
