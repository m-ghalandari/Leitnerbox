import React from 'react'
import Card from './Card.js'

export default function CardList({ flashcards, deleteFlashcard, correct_or_wrongAnswer, editFlashcard }) {
  return (
    <div className='card-list card'>
      
      
      {
        flashcards.map(card => (
          <Card key={card.id}
            card={card}
            deleteFlashcard={deleteFlashcard}
            correct_or_wrongAnswer={correct_or_wrongAnswer}
            editFlashcard={editFlashcard} />))
      }
    </div>
  )
}
