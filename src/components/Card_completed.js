// import React from "react";

// export default function Card_completed({ card }) {

//   return (
//     <div>
//       <h1>{card.front}</h1>
//       <h2>{card.back}</h2>
//       {card.level !== 5 ? <h2>status: not completed</h2>: <h2>status: completed</h2>}
//       <h2>Box: {card.box} - level: {card.level}</h2>
//     </div>
//   );
// }
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
