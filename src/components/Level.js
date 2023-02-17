import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";

export default function Level({
  flashcards,
  deleteFlashcard,
  updateFlashcard,
  UpdateText
}) {
  return (
    <>
      {flashcards.length > 0 ? (
        <CardList
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          updateFlashcard={updateFlashcard}
          UpdateText={UpdateText}
        />
      ) : (
        <Container>Leer</Container>
      )}
    </>
  );
}

