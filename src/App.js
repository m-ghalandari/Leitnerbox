import VocabularyForm from "./components/VocabularyForm";
import Box_0 from "./components/sections/Box_0";
import Box_1 from "./components/sections/Box_1";
import Box_2 from "./components/sections/Box_2";
import Box_3 from "./components/sections/Box_3";
import Box_4 from "./components/sections/Box_4";
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
  
  const [falshcarts, setFlashcarts] = useState([]);

  
  // fetch the data from database
  useEffect(()=>{
    console.log("Flash");
  },[])

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

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox1(!showBox1)}
        >
          Box 1
        </Button>
        {showBox1 && <Box_1 />}

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox2(!showBox2)}
        >
          Box 2
        </Button>
        {showBox2 && <Box_2 />}

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox3(!showBox3)}
        >
          Box 3
        </Button>
        {showBox3 && <Box_3 />}

        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox4(!showBox4)}
        >
          Box 4
        </Button>
        {showBox4 && <Box_4 />}
      </div>
      </Container>
  );
}

export default App;
