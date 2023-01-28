import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CardList from "./CardList";

export default function Box_0({ flashcards, deleteFlashcard , updataFlashcard}) {
  const [showBox0, setShowBox0] = useState(false);

  return (
    <div className="d-grid gap-4">
      <Button
        variant="success"
        size="lg"
        onClick={() => setShowBox0(!showBox0)}
      >
        Box 0
      </Button>

      {showBox0 && <CardList flashcards={flashcards} deleteFlashcard={deleteFlashcard} updataFlashcard={updataFlashcard}/>}
    </div>
  );
}
