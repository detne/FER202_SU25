import { Card } from "react-bootstrap";

function MyInfo() {
  return (
    <Card className="m-3 text-center">
      <Card.Body>
        <Card.Title>My name is Hoang Vu</Card.Title>
        <Card.Text>I’m a React learner at FPT University!</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyInfo;
