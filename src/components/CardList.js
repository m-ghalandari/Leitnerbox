import React from 'react'
import Card from './Card.js'

export default function CardList({flashcards, deleteFlashcard, updataFlashcard}) {
  return (
    <div className='card-list card'>
        {/* <Card /> */}
        {flashcards.map(card=>(<Card key={card.id} card={card} deleteFlashcard={deleteFlashcard} updataFlashcard={updataFlashcard}/>))}
    </div>
  )
}
