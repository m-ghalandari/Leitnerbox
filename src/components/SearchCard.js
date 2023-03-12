
import React from "react";
import { Card, Container } from "react-bootstrap";

export default function SearchCard({ card }) {

  const cardBoxNumber = card.box !== 5 ? "my-3 text-center" : "my-3 text-center bg-success";

  return (
    <Container>
    <Card className={cardBoxNumber} style={{fontSize: '1.5rem'}}>
      <Card.Header >{card.front}</Card.Header>
      <Card.Body>
        <Card.Text >Back: {card.back}</Card.Text>
        <Card.Text>Status: {card.box !== 5 ? "not completed" : "completed"}</Card.Text>
        <Card.Text>Box: {card.box} - Level: {card.level}</Card.Text>
      </Card.Body>
    </Card>
  </Container>
  
  );
}
