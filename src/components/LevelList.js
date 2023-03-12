import React, { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Level from "./Level";
import { BsArrowDownCircle } from "react-icons/bs";

const LevelList = ({
  numberOfLevelBox,
  flashcards,
  deleteFlashcard,
  correct_or_wrongAnswer,
  changeFlashcardsLevels,
  editFlashcard,
}) => {
  const [showLevels, setShowLevels] = useState(
    Array(numberOfLevelBox).fill(false)
  );

  useEffect(() => {
    setShowLevels((prev) =>
      prev.map((val, i) => {
        const levelFlashcards = flashcards.filter(
          (flashcard) => flashcard.level === i + 1
        );
        return levelFlashcards.length > 0 ? val : false;
      })
    );
  }, [flashcards]);

  const handleLevelButtonClick = (index) => {
    setShowLevels((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <Container>
      <div className="d-grid gap-4">
        {Array.from({ length: numberOfLevelBox }, (_, i) => {
          const levelFlashcards = flashcards.filter(
            (flashcard) => flashcard.level === i + 1
          );
          const buttonVariant =
            levelFlashcards.length > 0 ? "primary" : "danger";
          const flashcardNumber = levelFlashcards.length;

          return (
            <Fragment key={i}>
              <Button
                variant={buttonVariant}
                size="sm"
                onClick={() => handleLevelButtonClick(i)}
              >
                Level {i + 1}
                <span> ( {flashcardNumber} )</span>
              </Button>

              {showLevels[i] && flashcardNumber > 0 && (
                <Level
                  flashcards={levelFlashcards}
                  deleteFlashcard={deleteFlashcard}
                  correct_or_wrongAnswer={correct_or_wrongAnswer}
                  editFlashcard={editFlashcard}
                />
              )}
            </Fragment>
          );
        })}
        <div className="text-left">
          <BsArrowDownCircle
            size="30"
            onClick={() => {
              changeFlashcardsLevels(flashcards);
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default LevelList;
