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
    <div>
      <button
        type="button"
        class="btn btn-outline-info"
        onClick={() => setShowCompletedCards(!showCompletedCards)}
      >
        Info
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
