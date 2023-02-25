import React from 'react'
import CardList from './CardList'
export default function CurrentCards({ currentCards, deleteFlashcard, correct_or_wrongAnswer, editFlashcard }) {

    return (
       
        
        <CardList flashcards={currentCards}
              deleteFlashcard={deleteFlashcard}
              correct_or_wrongAnswer={correct_or_wrongAnswer}
              editFlashcard={editFlashcard} />  
                       
        );

}
