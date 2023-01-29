
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";

export default function Level({
  level,
  flashcards,
  deleteFlashcard,
  updataFlashcard,
}) {
  return (
    <>
      {flashcards.length > 0 ? (
        <CardList
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
        />
      ) : (
        <Container>Leer</Container>
      )}
    </>
  );
}
