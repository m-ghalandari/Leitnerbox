import VocabularyForm from "./components/VocabularyForm";
import Box_0 from "./components/Box_0";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BoxList from "./components/BoxList";
import CompletedCards from "./components/CompletedCards";
import axios from "axios";
import Search from "./components/Search";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.178.125:3001/api/get').then(response => { setFlashcards(response.data) 
    console.log(response.data)});
  }, [])


  const addFlashcard = (newFlashcard) => {

    axios.post('http://192.168.178.125:3001/api/insert', {
      id: newFlashcard.id, box: newFlashcard.box,
      level: newFlashcard.level,
      front: newFlashcard.front,
      back: newFlashcard.back,
      example: newFlashcard.example
    }).then(() => {
      setFlashcards([...flashcards, newFlashcard]);
    }).catch(err => {
      alert(err);
    })

  };

  const deleteFlashcard = (id) => {

    // Delete the flashcard from the database
    axios.delete(`http://192.168.178.125:3001/api/delete/${id}`).then(() => {
      const updatedFlashcards = flashcards.filter(
        (flashcard) => id !== flashcard.id
      );
      setFlashcards(updatedFlashcards);
    }).catch(err => {
      alert(err);
    })

  };



  const editFlashcard = (updatedCard) => {

    axios.put('http://192.168.178.125:3001/api/editCard', {
      id: updatedCard.id, box: updatedCard.box,
      level: updatedCard.level,
      front: updatedCard.front,
      back: updatedCard.back,
      example: updatedCard.example
    }).then(() => {
      const updatedFlashcards = flashcards.map((flashcard) =>
      flashcard.id === updatedCard.id ? updatedCard : flashcard
    );
    setFlashcards(updatedFlashcards);
    }).catch(err => {
      alert(err);
    })

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

    axios.put('http://192.168.178.125:3001/api/increaseLevels', {
      cards
    }).then(() => {})
      .catch(err => {
      alert(err);
    })

  };



  return (
    <Container>
      {/* npx json-server --watch database/db.json --port 8000 */}

      <Search flashcards={flashcards} />


      <div className="App d-grid gap-4">
        <VocabularyForm addFlashcard={addFlashcard} />

        <Box_0
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
          flashcards={flashcards.filter((flashcard) => flashcard.box === 5)}
          deleteFlashcard={deleteFlashcard}
          correct_or_wrongAnswer={correct_or_wrongAnswer}
        />
      </div>

    </Container>
  );
}

export default App;
