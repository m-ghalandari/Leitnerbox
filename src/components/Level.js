import React from "react";
import CardList from "./CardList";

export default function Level({
  flashcards,
  deleteFlashcard,
  correct_or_wrongAnswer,
  editFlashcard
}) {

  
  return (
    <>
      <CardList
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          correct_or_wrongAnswer={correct_or_wrongAnswer}
          editFlashcard={editFlashcard}
        />
    </>
  );
}

