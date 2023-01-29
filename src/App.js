import VocabularyForm from "./components/VocabularyForm";
import Box_0 from "./components/Box_0";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import BoxButton from "./components/BoxButton";
import BoxList from "./components/BoxList";

function App() {
  // const [showBox1, setShowBox1] = useState(false);
  // const [showBox2, setShowBox2] = useState(false);
  // const [showBox3, setShowBox3] = useState(false);
  // const [showBox4, setShowBox4] = useState(false);

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
  ]);

  const addFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  const deleteFlashcard = (id) => {
    const updatedFlashcards = flashcards.filter(
      (flashcard) => id !== flashcard.id
    );
    setFlashcards(updatedFlashcards);
  };

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

  const updataFlashcard = (id, box, level, nextLevel) => {
    // let card = flashcards.find((flashcard) => flashcard.id === id);

    if (nextLevel) {
      switch (box) {
        case 0:
          console.log("Box 0");
          changeFlashcardProperties(id, 1, 1);
          // card=null;
          break;
        case 1:
          console.log("Box 1");
          break;
        case 2:
          console.log("Box 2");
          break;
        case 3:
          console.log("Box 3");
          break;
        case 4:
          console.log("Box 4");
          break;
        default:
          console.log("error");
      }
    } else {
      changeFlashcardProperties(id, 0, 0);
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

        {/* <BoxButton
          levels={2}
          flashcards={flashcards.filter((card) => card.box === 1)}
          boxNumber={1}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
          setShowBox={setShowBox1}
          showBox={showBox1}
        />
        <BoxButton
          levels={4}
          flashcards={flashcards.filter((card) => card.box === 2)}
          boxNumber={2}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
          setShowBox={setShowBox2}
          showBox={showBox2}
        />
        <BoxButton
          levels={8}
          flashcards={flashcards.filter((card) => card.box === 3)}
          boxNumber={3}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
          setShowBox={setShowBox3}
          showBox={showBox3}
        />
        <BoxButton
          levels={16}
          flashcards={flashcards.filter((card) => card.box === 4)}
          boxNumber={4}
          deleteFlashcard={deleteFlashcard}
          updataFlashcard={updataFlashcard}
          setShowBox={setShowBox4}
          showBox={showBox4}
        /> */}
      </div>
    </Container>
  );
}

export default App;
