import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";

export default function Level({
  flashcards,
  deleteFlashcard,
  updateFlashcard,
}) {
  return (
    <>
      {flashcards.length > 0 ? (
        <CardList
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          updateFlashcard={updateFlashcard}
        />
      ) : (
        <Container>Leer</Container>
      )}
    </>
  );
}

