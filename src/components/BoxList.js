import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LevelList from "./LevelList";

export default function BoxList({
  flashcards,
  deleteFlashcard,
  updataFlashcard,
}) {
  const [showBoxes, setShowBoxes] = useState(Array(4).fill(false));

  const toggleBox = (index) => {
    setShowBoxes((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <>
          <Button variant="success" size="lg" onClick={() => toggleBox(i)}>
            Box {i + 1}
          </Button>
          {showBoxes[i] && (
            <LevelList
              numberOfLevelBox={Math.pow(2, i + 1)}
              flashcards={flashcards.filter(
                (flashcard) => flashcard.box === i + 1
              )}
              deleteFlashcard={deleteFlashcard}
              updataFlashcard={updataFlashcard}
            />
          )}
        </>
      ))}
    </>
  );
}
