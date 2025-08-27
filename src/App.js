import VocabularyForm from "./components/VocabularyForm";
import Box_0 from "./components/Box_0";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Modal, Form } from "react-bootstrap";
import BoxList from "./components/BoxList";
import CompletedCards from "./components/CompletedCards";
import axios from "axios";
import Search from "./components/Search";
import OpenAIComponent from "./components/Gpt-api";
import LastLevelCards from "./components/LastLevelCards";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState("");

  const [autoLastLevel, setAutoLastLevel] = useState(false);

  const pin = "momo";

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get") // backend URL
      .then((res) => setFlashcards(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  const handlePasswordSubmit = () => {
    // Check if the entered password is correct
    if (password === pin) {
      setShowModal(false);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const addFlashcard = (newFlashcard) => {
    axios
      .post("http://localhost:3001/api/insert", {
        id: newFlashcard.id,
        box: newFlashcard.box,
        level: newFlashcard.level,
        front: newFlashcard.front,
        back: newFlashcard.back,
        example: newFlashcard.example,
      })
      .then(() => {
        setFlashcards([...flashcards, newFlashcard]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteFlashcard = (id) => {
    // Delete the flashcard from the database
    axios
      .delete(`http://localhost:3001/api/delete/${id}`)
      .then(() => {
        const updatedFlashcards = flashcards.filter(
          (flashcard) => id !== flashcard.id
        );
        setFlashcards(updatedFlashcards);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const editFlashcard = (updatedCard) => {
    axios
      .put("http://localhost:3001/api/editCard", {
        id: updatedCard.id,
        box: updatedCard.box,
        level: updatedCard.level,
        front: updatedCard.front,
        back: updatedCard.back,
        example: updatedCard.example,
      })
      .then(() => {
        const updatedFlashcards = flashcards.map((flashcard) =>
          flashcard.id === updatedCard.id ? updatedCard : flashcard
        );
        setFlashcards(updatedFlashcards);
      })
      .catch((err) => {
        alert(err);
      });
  };

  //update box and level in flashcards and database
  const changeFlashcardProperties = async (id, box, level) => {
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
    const findedFlashcard = flashcards.find((flashcard) => flashcard.id === id);

    const updatedFlashcard = {
      ...findedFlashcard,
      box: box,
      level: level,
    };
    try {
      editFlashcard(updatedFlashcard);
    } catch (error) {
      alert(error);
    }
  };

  //correct or false answer?
  const correct_or_wrongAnswer = (card, nextLevel) => {
    if (nextLevel) {
      if (card.box === 4 && card.level === 16) {
        changeFlashcardProperties(card.id, 5, 0);
      } else if (card.box === 4) {
        changeFlashcardProperties(card.id, 4, card.level + 1);
      } else if (card.box === 3 && card.level === 8) {
        changeFlashcardProperties(card.id, 4, 1);
      } else if (card.box === 3) {
        changeFlashcardProperties(card.id, 3, card.level + 1);
      } else if (card.box === 2 && card.level === 4) {
        changeFlashcardProperties(card.id, 3, 1);
      } else if (card.box === 2) {
        changeFlashcardProperties(card.id, 2, card.level + 1);
      } else if (card.box === 1 && card.level === 2) {
        changeFlashcardProperties(card.id, 2, 1);
      } else if (card.box === 1) {
        changeFlashcardProperties(card.id, 1, card.level + 1);
      } else if (card.box === 0) {
        changeFlashcardProperties(card.id, 1, 1);
      }
    } else {
      changeFlashcardProperties(card.id, 0, 0);
    }
  };

  //hier wird alle Flashcard ihre level um 1 erhöht
  const changeFlashcardsLevels = async (cards) => {
    let box1 = false;
    let box2 = false;
    let box3 = false;
    let box4 = false;

    cards.forEach((card) => {
      if (card.box === 1 && card.level >= 2) {
        box1 = true;
      }
      if (card.box === 2 && card.level >= 4) {
        box2 = true;
      }
      if (card.box === 3 && card.level >= 8) {
        box3 = true;
      }
      if (card.box === 4 && card.level >= 16) {
        box4 = true;
      }
    });
    if (box1) {
      alert(
        "Warnung: Mindestens eine Karte aus Box 1 hat das maximale Level erreicht. Es muss zuerst letzte Level frei machen."
      );
      return;
    }
    if (box2) {
      alert(
        "Warnung: Mindestens eine Karte aus Box 2 hat das maximale Level erreicht. Es muss zuerst letzte Level frei machen."
      );
      return;
    }
    if (box3) {
      alert(
        "Warnung: Mindestens eine Karte aus Box 3 hat das maximale Level erreicht. Es muss zuerst letzte Level frei machen."
      );
      return;
    }
    if (box4) {
      alert(
        "Warnung: Mindestens eine Karte aus Box 4 hat das maximale Level erreicht. Es muss zuerst letzte Level frei machen."
      );
      return;
    }

    cards.map((card) => {
      setFlashcards((prevFlashcards) =>
        prevFlashcards.map((flashcard) => {
          if (flashcard.id === card.id) {
            return { ...flashcard, level: card.level + 1 };
          }
          return flashcard;
        })
      );
    });

    axios
      .put("http://localhost:3001/api/increaseLevels", {
        cards,
      })
      .then(() => {})
      .catch((err) => {
        alert(err);
      });
  };

  const toggleAutoLastLevel = () => {
    setAutoLastLevel(!autoLastLevel); // Schaltet zwischen den Modi um
  };

  return (
    <Container>
      <Search flashcards={flashcards} />

      {/* Button zum Umschalten zwischen den Modi */}
      <div className="d-flex justify-content-end">
        <Button
          onClick={toggleAutoLastLevel}
          className="mb-4 mt-2"
          variant="dark"
          size="sm"
        >
          {autoLastLevel ? "Manuelles Durchgehen" : "Automatisches Durchgehen"}
        </Button>
      </div>

      {/* Anzeigen von LastLevelCards basierend auf dem Zustand */}
      {autoLastLevel && (
        <LastLevelCards
          flashcards={flashcards}
          deleteFlashcard={deleteFlashcard}
          correct_or_wrongAnswer={correct_or_wrongAnswer}
          editFlashcard={editFlashcard}
        />
      )}

      {!autoLastLevel && (
        <div className="App d-grid gap-4">
          <VocabularyForm addFlashcard={addFlashcard} />

          <OpenAIComponent addFlashcard={addFlashcard} />

          <>
            <Box_0 // Reserved Cards
              flashcards={flashcards.filter((flashcard) => flashcard.box === 0)}
              deleteFlashcard={deleteFlashcard}
              correct_or_wrongAnswer={correct_or_wrongAnswer}
              editFlashcard={editFlashcard}
            />

            <BoxList
              flashcards={flashcards.filter(
                (flashcard) => flashcard.box !== 0 && flashcard.box !== 5
              )}
              deleteFlashcard={deleteFlashcard}
              correct_or_wrongAnswer={correct_or_wrongAnswer} //for correct and wrong answer
              changeFlashcardsLevels={changeFlashcardsLevels} //for change a set of flashcardslevel
              editFlashcard={editFlashcard}
            />

            <CompletedCards
              deleteFlashcard={deleteFlashcard}
              correct_or_wrongAnswer={correct_or_wrongAnswer}
              editFlashcard={editFlashcard}
            />
          </>
        </div>
      )}

      <Modal
        show={showModal}
        onHide={() => alert("You have to enter the password.")}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
