
import React, { useState } from "react";
import CardList from "./CardList";
import Card_completed from "./Card_completed";

export default function Search({flashcards}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    console.log(flashcards.includes(searchTerm))
    console.log(flashcards)
  };

  const filtedFlashcards = flashcards.filter((flashcard)=> {
    if(searchTerm==""){
      return "";
    } else if (flashcard.front.toLowerCase().includes(searchTerm.toLowerCase())){
      return flashcard;
    }
  })
  const number = flashcards.length;

  return (
    <>
      <h1 className="text-center mt-3">Leitner-Box</h1>
      <h5 className="text-center mt-3">The number of flashcards: {number}</h5>
      <div className="input-group rounded mb-5 mt-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search for a flashcard..."
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* {searchTerm &&  <CardList flashcards={filtedFlashcards}/>} */}
      {searchTerm && filtedFlashcards.map(card=>(<Card_completed key={card.id} card={card} />))}

      
    </>
  );
}
