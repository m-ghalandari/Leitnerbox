import VocabularyForm from "./components/VocabularyForm";
import Box from "./components/Box";
import Box_0 from "./components/Box_0";
import {  useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import BoxButton from "./components/BoxButton";
// import axios from 'axios';


function App() {

  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);

  const [flashcards, setFlashcards] = useState([
    {
      "id": 1,
      "box": 1,
      "level": 1,
      "front": "What is the capital of Germany?",
      "back": "Berlin",
      "example": "I live in Berlin"
    },
    {
      "id": 2,
      "box": 2,
      "level": 2,
      "front": "What is the currency of France?",
      "back": "Euro",
      "example": "I live in Berlin"
    },
    {
      "id": 3,
      "box": 2,
      "level": 2,
      "front": "What is the currency of France?",
      "back": "Euro",
      "example": "I live in Berlin"
    },
    {
      "id": 4,
      "box": 2,
      "level": 2,
      "front": "What is the currency of France?",
      "back": "Euro",
      "example": "I live in Berlin"
    }
  ]);





  const addFlashcard = (newFlashcard) => {
  setFlashcards([...flashcards, newFlashcard]);
}

const deleteFlashcard = (id) => {
  const updatedFlashcards = flashcards.filter((flashcard) => id !== flashcard.id);
  setFlashcards(updatedFlashcards);
}





  
  return (
    
    <Container>
      <div className="App d-grid gap-4">

        <VocabularyForm addFlashcard={addFlashcard}/>
        <Box_0 flashcards={flashcards} deleteFlashcard={deleteFlashcard}/>


        <BoxButton levels={2} flashcards={flashcards.filter(card=> card.box===2)} boxNumber={1} setShowBox={setShowBox1} showBox={showBox1} />
        <BoxButton levels={4} flashcards={flashcards} boxNumber={2} setShowBox={setShowBox2} showBox={showBox2} />
        <BoxButton levels={8} flashcards={flashcards} boxNumber={3} setShowBox={setShowBox3} showBox={showBox3} />
        <BoxButton levels={16} flashcards={flashcards} boxNumber={4} setShowBox={setShowBox4} showBox={showBox4} />

      </div>
    </Container>
    
  );
}

export default App;
