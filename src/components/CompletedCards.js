import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";

export default function CompletedCards({
  flashcards,
  deleteFlashcard,
  correct_or_wrongAnswer,
  editFlashcard
}) {
  const [showCompletedCards, setShowCompletedCards] = useState(false);

  return (
    <div className="text-center mt-5">
      <button
        type="button"
        className="btn btn-outline-info mb-3 "
        onClick={() => setShowCompletedCards(!showCompletedCards)}
      >
        completed cards ({flashcards.length})
      </button>

      {showCompletedCards && (
        <CardList
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          correct_or_wrongAnswer={correct_or_wrongAnswer}
          editFlashcard={editFlashcard}
        />
      )}
    </div>
  );
}
