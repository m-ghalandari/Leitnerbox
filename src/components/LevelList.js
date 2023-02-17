import React, { useState, Fragment  } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Level from "./Level";
import { BsArrowDownCircle } from "react-icons/bs";
const LevelList = ({
  numberOfLevelBox,
  flashcards,
  deleteFlashcard,
  updateFlashcard,
  changeFlashcardsLevels,
  UpdateText
}) => {
  const [showLevels, setShowLevels] = useState(
    Array(numberOfLevelBox).fill(false)
  );
  
  return (
    <Container>
      <div className="d-grid gap-4">
        {Array.from({ length: numberOfLevelBox }, (_, i) => {
          const levelFlashcards = flashcards.filter(
            (flashcard) => flashcard.level === i + 1
          );
          const buttonVariant = levelFlashcards.length > 0 ? "primary" : "danger";
          const flashcardNumber = levelFlashcards.length;

          return (
            <Fragment key={i}>
              <Button
                variant={buttonVariant}
                size="sm"
                onClick={() =>
                  setShowLevels((prev) =>
                    prev.map((val, j) => (j === i ? !val : val))
                  )
                }
              >
                Level {i + 1} 
                <span> ( {flashcardNumber} )</span> 
              </Button>

              {showLevels[i] && (
                <Level
                  flashcards={levelFlashcards}
                  deleteFlashcard={deleteFlashcard}
                  updateFlashcard={updateFlashcard}
                  UpdateText={UpdateText}
                />
              )}
            </Fragment>
          );
        })}
        <div className="text-left">
          <BsArrowDownCircle size="30" onClick={()=>{changeFlashcardsLevels(flashcards)}}/>
        </div>
      </div>
    </Container>
  );
};

export default LevelList;
