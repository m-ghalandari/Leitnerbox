import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CardList from "./CardList";

export default function Box_0({ flashcards, deleteFlashcard , updateFlashcard}) {
  const [showBox0, setShowBox0] = useState(false);

  const number = flashcards.length;

  return (
    <div className="d-grid gap-4">
      <Button
        variant="success"
        size="lg"
        onClick={() => setShowBox0(!showBox0)}
      >
        Reserved cards ( {number} )
      </Button>

      {showBox0 && <CardList flashcards={flashcards} deleteFlashcard={deleteFlashcard} updateFlashcard={updateFlashcard}/>}
    </div>
  );
}
