import React, { useState } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import CardList from "./CardList";

export default function CompletedCards({
  deleteFlashcard,
  correct_or_wrongAnswer,
  editFlashcard
}) {
  const [completedCards, setCompletedCards] = useState([]);
  const [showCompletedCards, setShowCompletedCards] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false); // Es wird nur einmal die CompletedCards geladen.

  const ip2 = process.env.REACT_APP_IP;
  const fetchCompletedCards = async () => {
    
    try {
      const response = await axios.get(`http://${ip2}:3001/api/getBox5`);
      setCompletedCards(response.data);
      setFirstLoad(true);
    } catch (error) {
      console.error("Error fetching completed cards:", error);
      alert("Fehler beim Abrufen der abgeschlossenen Karten.");
    }
  };

  const handleShowCompletedCards = () => {
    setShowCompletedCards(!showCompletedCards);
    if (!showCompletedCards && !firstLoad) {
      fetchCompletedCards();
    }
  };

  return (
    <div className="text-center mt-5">
      <Button
        variant="dark"
        className="mb-3"
        onClick={handleShowCompletedCards}
      >
        Completed Cards anzeigen ({completedCards.length!=0 ? completedCards.length : ""})
      </Button>

      {showCompletedCards && (
        <CardList
          flashcards={completedCards}
          deleteFlashcard={deleteFlashcard}
          correct_or_wrongAnswer={correct_or_wrongAnswer}
          editFlashcard={editFlashcard}
        />
      )}
    </div>
  );
}
