import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

export function UserCard({ user: { email, name }, clearUser }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Button variant="primary" onClick={clearUser}>
          Close
        </Button>
      </Card.Body>
    </Card>
  );
}
