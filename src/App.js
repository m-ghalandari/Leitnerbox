import VocabularyForm from "./components/VocabularyForm";
import Box from "./components/sections/Box";
import Box_0 from "./components/sections/Box_0";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function App() {
  const [showVocabularyForm, setShowVocabularyForm] = useState(false);
  const [showBox0, setShowBox0] = useState(false);
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      box: 1,
      level: 1,
      front: "What is the capital of Germany?",
      back: "Berlin",
      example: "I live in Berlin"
    },
    {
      id: 2,
      box: 1,
      level: 2,
      front: "What is the currency of France?",
      back: "Euro",
      example: "I live in Berlin"
    },
    {
      id: 3,
      box: 2,
      level: 1,
      front: "What is the highest mountain in the world?",
      back: "Mount Everest",
      example: "I live in Berlin"
    },
    {
      id: 4,
      box: 2,
      level: 2,
      front: "What is the largest ocean in the world?",
      back: "Pacific Ocean",
      example: "I live in Berlin"
    }
  ]);

  const box1Flashcards = flashcards.filter(flashcard=>flashcard.box===1);
  const box2Flashcards = flashcards.filter(flashcard=>flashcard.box===2);
  const box3Flashcards = flashcards.filter(flashcard=>flashcard.box===3);
  const box4Flashcards = flashcards.filter(flashcard=>flashcard.box===4);

 


  // fetch the data from database
  // useEffect(()=>{
  //   console.log("Flash");
  // },[])


  const Box1 = 1;
  const Box2 = 2;
  const Box3 = 3;
  const Box4 = 4;

  

  return (
    <Container>
      <div className="App d-grid gap-4">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setShowVocabularyForm(!showVocabularyForm)}
        >
          Add a new vocabulary
        </Button>
        {showVocabularyForm && <VocabularyForm />}

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox0(!showBox0)}
        >
          Box 0
        </Button>
        {showBox0 && <Box_0 />}


        {/* von hier eine wiederverwendbare Bax  */}
        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox1(!showBox1)}
        >
          Box 1
        </Button>
        {showBox1 && <Box levels={2} flashcards={flashcards} boxNumber={1}/>}

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox2(!showBox2)}
        >
          Box 2
        </Button>

        {showBox2 && <Box levels={4} flashcards={flashcards} boxNumber={2}/>}

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox3(!showBox3)}
        >
          Box 3
        </Button>
        {showBox3 && <Box levels={8} flashcards={flashcards} boxNumber={3}/>}

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox4(!showBox4)}
        >
          Box 4
        </Button>
        {showBox4 && <Box levels={16} flashcards={flashcards} boxNumber={4}/>}
      </div>
      </Container>
  );
}

export default App;
