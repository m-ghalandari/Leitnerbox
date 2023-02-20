import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";

export default function Level({
  flashcards,
  deleteFlashcard,
  correct_or_wrongAnswer,
  editFlashcard
}) {
  return (
    <>
      {flashcards.length > 0 ? (
        <CardList
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          correct_or_wrongAnswer={correct_or_wrongAnswer}
          editFlashcard={editFlashcard}
        />
      ) : (
        <Container>Leer</Container>
      )}
    </>
  );
}

