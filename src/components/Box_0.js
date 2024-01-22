import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ReservedCard from "./ReservedCard";

export default function Box_0({ flashcards, deleteFlashcard, correct_or_wrongAnswer, editFlashcard }) {
  const [showBox0, setShowBox0] = useState(false);
  const number = flashcards.length;

  return (
    <div className="d-grid gap-4">
      <div className="d-flex justify-content-end">
        <Button
          variant="dark"
          size="sm" // Ändert die Größe des Buttons zu klein
          onClick={() => setShowBox0(!showBox0)}
        >
          Reserved cards ( {number} )
        </Button>
      </div>

      {showBox0 && flashcards.map(card => (
        <ReservedCard key={card.id}
          card={card}
          deleteFlashcard={deleteFlashcard}
          correct_or_wrongAnswer={correct_or_wrongAnswer}
          editFlashcard={editFlashcard} 
        />)
      )}
    </div>
  );
}
