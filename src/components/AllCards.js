import React, { useState } from "react";
import CardList from "./CardList";

export default function AllCards({
  flashcards,
  deleteFlashcard,
  correct_or_wrongAnswer,
  editFlashcard
}) {
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <div className="text-center mt-5">
      <button
        type="button"
        className="btn btn-outline-info mb-3 "
        onClick={() => setShowAllCards(!showAllCards)}
      >
        all cards
      </button>

      {showAllCards && (
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

