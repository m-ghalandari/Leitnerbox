import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

export default function Card({card, deleteFlashcard}) {
  return (
    <div className='card'>
        <p>Front: {card.front}</p>
        <p>Back: {card.back}</p>
        <p>Example: {card.example}</p>
        <MdDeleteForever onClick={()=>deleteFlashcard(card.id)}/>
    </div>
  )
}
