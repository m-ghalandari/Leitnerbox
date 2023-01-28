import React, { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
import { Container } from "react-bootstrap";
import CardList from "./CardList";

export default function Level({ level, flashcards }) {
  return (
    <>
      {flashcards.length > 0 ? (
        <CardList flashcards={flashcards} />
      ) : (
        <Container>Leer</Container>
      )}
    </>
  );
}
