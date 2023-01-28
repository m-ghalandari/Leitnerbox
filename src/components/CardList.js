import React from 'react'
import Card from './Card.js'

export default function CardList({flashcards, deleteFlashcard}) {
  return (
    <div className='card-list card'>
        {/* <Card /> */}
        {flashcards.map(card=>(<Card card={card} deleteFlashcard={deleteFlashcard}/>))}
    </div>
  )
}
