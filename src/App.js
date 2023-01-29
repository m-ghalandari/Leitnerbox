import VocabularyForm from "./components/VocabularyForm";
import Box_0 from "./components/Box_0";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BoxList from "./components/BoxList";

function App() {
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      box: 0,
      level: 1,
      front: "What is the capital of Germany?",
      back: "Berlin",
      example: "I live in Berlin",
    },
    {
      id: 2,
      box: 2,
      level: 2,
      front: "What is the currency of France?",
      back: "Euro",
      example: "I live in Berlin",
    },
    {
      id: 3,
      box: 2,
      level: 2,
      front: "What is the currency of France?",
      back: "Euro",
      example: "I live in Berlin",
    },
    {
      id: 4,
      box: 2,
      level: 3,
      front: "What is the currency of France?",
      back: "Euro",
      example: "I live in Berlin",
    },
    {
      id: 5,
      box: 4,
      level: 16,
      front: "What is the currency of France?",
      back: "Euro",
      example: "I live in Berlin",
    },
    {
      id: 6,
      box: 1,
      level: 2,
      front: "Who is the best person dude?",
      back: "Momo",
      example: "I live in Berlin",
    },
  ]);
  // level 17 is final level. it indicates the completed cards 

  const addFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  const deleteFlashcard = (id) => {
    const updatedFlashcards = flashcards.filter(
      (flashcard) => id !== flashcard.id
    );
    setFlashcards(updatedFlashcards);
  };

  // id:Falshcardid, box and level: have to change
  const changeFlashcardProperties = (id, box, level) => {
    const updatedFlashcards = flashcards.map((flashcard) => {
      if (flashcard.id === id) {
        return {
          ...flashcard,
          box,
          level,
        };
      }
      return flashcard;
    });
    setFlashcards(updatedFlashcards);
  };

  const updataFlashcard = (card, nextLevel) => {
    if (nextLevel) {
      switch (card.box) {
        case 0:
          console.log("Box 0");
          changeFlashcardProperties(card.id, 1, 1);
          break;
        case 1:
          console.log("Box 1");
          if (card.level === 1) {
            changeFlashcardProperties(card.id, 1, 2);
          } else {
            changeFlashcardProperties(card.id, 2, 1);
          }

          break;
        case 2:
          console.log("Box 2");
          if (card.level === 1) {
            changeFlashcardProperties(card.id, 2, 2);
          } else if (card.level === 2) {
            changeFlashcardProperties(card.id, 2, 3);
          } else if (card.level === 3) {
            changeFlashcardProperties(card.id, 2, 4);
          } else if (card.level === 4) {
            changeFlashcardProperties(card.id, 3, 1);
          }
          break;
        case 3:
          console.log("Box 3");
          if (card.level === 1) {
            changeFlashcardProperties(card.id, 3, 2);
          } else if (card.level === 2) {
            changeFlashcardProperties(card.id, 3, 3);
          } else if (card.level === 3) {
            changeFlashcardProperties(card.id, 3, 4);
          } else if (card.level === 4) {
            changeFlashcardProperties(card.id, 3, 5);
          } else if (card.level === 5) {
            changeFlashcardProperties(card.id, 3, 6);
          } else if (card.level === 6) {
            changeFlashcardProperties(card.id, 3, 7);
          } else if (card.level === 7) {
            changeFlashcardProperties(card.id, 3, 8);
          } else if (card.level === 8) {
            changeFlashcardProperties(card.id, 4, 1);
          }
          break;
        case 4:
          console.log("Box 4");
          if (card.level === 1) {
            changeFlashcardProperties(card.id, 4, 2);
            } else if (card.level === 2) {
            changeFlashcardProperties(card.id, 4, 3);
            } else if (card.level === 3) {
            changeFlashcardProperties(card.id, 4, 4);
            } else if (card.level === 4) {
            changeFlashcardProperties(card.id, 4, 5);
            } else if (card.level === 5) {
            changeFlashcardProperties(card.id, 4, 6);
            } else if (card.level === 6) {
            changeFlashcardProperties(card.id, 4, 7);
            } else if (card.level === 7) {
            changeFlashcardProperties(card.id, 4, 8);
            } else if (card.level === 8) {
            changeFlashcardProperties(card.id, 4, 9);
            } else if (card.level === 9) {
            changeFlashcardProperties(card.id, 4, 10);
            } else if (card.level === 10) {
            changeFlashcardProperties(card.id, 4, 11);
            } else if (card.level === 11) {
            changeFlashcardProperties(card.id, 4, 12);
            } else if (card.level === 12) {
            changeFlashcardProperties(card.id, 4, 13);
            } else if (card.level === 13) {
            changeFlashcardProperties(card.id, 4, 14);
            } else if (card.level === 14) {
            changeFlashcardProperties(card.id, 4, 15);
            } else if (card.level === 15) {
            changeFlashcardProperties(card.id, 4, 16);
            } else if (card.level === 16) {
            changeFlashcardProperties(card.id, 4, 17);
            }
          break;
        default:
          console.log("error");
      }
    } else {
      changeFlashcardProperties(card.id, 0, 0);
    }
  };


  return (
    <Container>
      <div className="App d-grid gap-4">
        <VocabularyForm addFlashcard={addFlashcard} />

        <Box_0
          flashcards={flashcards.filter((flashcard) => flashcard.box === 0)}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
        />

        <BoxList
          flashcards={flashcards.filter((flashcard) => flashcard.box !== 0)}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
        />
      </div>
    </Container>
  );
}

export default App;
