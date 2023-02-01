import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";

export default function CompletedCards({
  flashcards,
  deleteFlashcard,
  updataFlashcard,
}) {
  const [showCompletedCards, setShowCompletedCards] = useState(false);

  return (
    <div className="text-center mt-5">
      <button
        type="button"
        className="btn btn-outline-info mb-3 "
        onClick={() => setShowCompletedCards(!showCompletedCards)}
      >
        All completed cards
      </button>

      {showCompletedCards && (
        <CardList
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
        />
      )}
    </div>
  );
}
