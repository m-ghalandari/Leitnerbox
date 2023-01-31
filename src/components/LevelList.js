import React, { useState, Fragment  } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Level from "./Level";

const LevelList = ({
  numberOfLevelBox,
  flashcards,
  deleteFlashcard,
  updataFlashcard,
  changeFlashcardsLevels
}) => {
  const [showLevels, setShowLevels] = useState(
    Array(numberOfLevelBox).fill(false)
  );

  
  return (
    <Container>
      <div className="d-grid gap-4">
        {Array.from({ length: numberOfLevelBox }, (_, i) => (
          <Fragment key={i}>
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                setShowLevels((prev) =>
                  prev.map((val, j) => (j === i ? !val : val))
                )
              }
            >
              Level {i + 1}
            </Button>

            {showLevels[i] && (
              <Level
                flashcards={flashcards.filter(
                  (flashcard) => flashcard.level === i + 1
                )}
                deleteFlashcard={deleteFlashcard}
                updataFlashcard={updataFlashcard}
              />
            )}
          </Fragment>
        ))}
        <div>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={()=>{changeFlashcardsLevels(flashcards)}}
          >
            Move
          </button>
        </div>
      </div>
    </Container>
  );
};

export default LevelList;
