
import React from "react";
import { Card, Button, Container } from "react-bootstrap";

export default function Card_completed({ card }) {

  return (
    <Container>
    <Card className="my-3 text-center" style={{fontSize: '1.5rem'}}>
      <Card.Header >{card.front}</Card.Header>
      <Card.Body>
        <Card.Text >Back: {card.back}</Card.Text>
        <Card.Text>Status: {card.level !== 5 ? "not completed" : "completed"}</Card.Text>
        <Card.Text>Box: {card.box} - Level: {card.level}</Card.Text>
      </Card.Body>
    </Card>
  </Container>
  
  );
}
