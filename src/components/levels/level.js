import React from "react";
import { Container } from "react-bootstrap";

export default function Level({ level, flashcards }) {
//   console.log(flashcards)
console.log((flashcards.length<=0) ?"leer": flashcards);
  return (
    <>
    {(flashcards.length>0)?<Container>
        <div>Level {level + 1}</div>
        {flashcards.map(f=>(
            <div>
                <p>{f.front}</p>
                <p>{f.back}</p>
            </div>
        ))}
        
      </Container>: <Container>Leer</Container>}
      </>
  );
}
