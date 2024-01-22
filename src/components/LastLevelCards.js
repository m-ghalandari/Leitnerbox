import React from 'react';
import Card from './Card'; // Importieren Sie die Card-Komponente

function LastLevelCards({ flashcards, deleteFlashcard, correct_or_wrongAnswer, editFlashcard }) {
    const getLastLevelCards = (cards) => {
      return cards.filter(card => {
        return (card.box === 1 && card.level === 2) ||
               (card.box === 2 && card.level === 4) ||
               (card.box === 3 && card.level === 8) ||
               (card.box === 4 && card.level === 16);
      });
    };
  
    const lastLevelCards = getLastLevelCards(flashcards);
    const number = lastLevelCards.length;
    return (
      <div>
        
        <div>
            <h6>Number: {number}</h6>
          {lastLevelCards.map(card => (
            <Card
              key={card.id}
              card={card}
              deleteFlashcard={deleteFlashcard}
              correct_or_wrongAnswer={correct_or_wrongAnswer}
              editFlashcard={editFlashcard}
              
            />
          ))}
        </div>
      </div>
    );
}

export default LastLevelCards;
