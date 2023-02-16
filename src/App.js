import VocabularyForm from "./components/VocabularyForm";
import Box_0 from "./components/Box_0";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BoxList from "./components/BoxList";
import CompletedCards from "./components/CompletedCards";
import axios from "axios";
import Search from "./components/Search";
import { EventEmitter } from 'events';


const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(40);

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  // box 5 is final. it indicates the completed cards
  // const [flashcards, isPending, error] = useFetch("http://localhost:8000/flashcards");

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setIsPending(true);
        const result = await axios.get("http://localhost:8000/flashcards");
        setFlashcards(result.data);
        setIsPending(false);
        setError(false);
      } catch (error) {
        setError(true);
        setIsPending(true);
      }
    })();
  }, []);

  const addFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  const deleteFlashcard = async (id) => {
    const updatedFlashcards = flashcards.filter(
      (flashcard) => id !== flashcard.id
    );
    setFlashcards(updatedFlashcards);
    // Delete the flashcard from the database
    try {
      await axios.delete(`http://localhost:8000/flashcards/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id, newBox, newLevel) => {
    const findedFlashcard = flashcards.find((flashcard) => flashcard.id === id);
    try {
      const updatedFlashcard = {
        ...findedFlashcard,
        box: newBox,
        level: newLevel,
      };
      await axios.put(
        `http://localhost:8000/flashcards/${id}`,
        updatedFlashcard
      );
    } catch (error) {
      console.error(error);
    }
  };

  // id:Flashcard id, box and level: have to change
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
    handleUpdate(id, box, level);
  };

  const updateFlashcard = (card, nextLevel) => {
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

  async function updateCards(cards) {
    for (let i = 0; i < cards.length; i++) {
      const flashcard = cards[i];
      try {
        const response = await axios.patch(
          `http://localhost:8000/flashcards/${flashcard.id}`,
          { level: flashcard.level + 1 }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  //hier wird alle Flashcard ihre level um 1 erhöht
  const changeFlashcardsLevels = async (cards) => {

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


    updateCards(cards);

  };



  return (
    <Container>
      {/* npx json-server --watch database/db.json --port 8000 */}
      {error ? (
        <p>Something went wrong</p>
      ) : (
        isPending && <div>is loading...</div>
      )}
      <Search flashcards={flashcards} />

      {!isPending && (
        <div className="App d-grid gap-4">
          <VocabularyForm addFlashcard={addFlashcard} />

          <Box_0
            flashcards={flashcards.filter((flashcard) => flashcard.box === 0)}
            deleteFlashcard={deleteFlashcard}
            updateFlashcard={updateFlashcard}
          />

          <BoxList
            flashcards={flashcards.filter(
              (flashcard) => flashcard.box !== 0 && flashcard.box !== 5
            )}
            deleteFlashcard={deleteFlashcard}
            updateFlashcard={updateFlashcard}
            changeFlashcardsLevels={changeFlashcardsLevels}
          />

          <CompletedCards
            flashcards={flashcards.filter((flashcard) => flashcard.box === 5)}
            deleteFlashcard={deleteFlashcard}
            updateFlashcard={updateFlashcard}
          />
        </div>
      )}
    </Container>
  );
}

export default App;
