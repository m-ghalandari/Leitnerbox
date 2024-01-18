
import React, { useState } from "react";
import SearchCard from "./SearchCard";

export default function Search({flashcards}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredFlashcards = flashcards.filter((flashcard)=> {
    if(searchTerm===""){
      return "";
    } else if (flashcard.front.toLowerCase().includes(searchTerm.toLowerCase())){
      return flashcard;
    } else if (searchTerm==="*"){
      return flashcards;
    }
  })
  const number = flashcards.length;
  
  return (
    <>
      <h1 className="text-center mt-3">Leitner-Box</h1>
      <h5 className="text-center mt-3">The number of all flashcards: {number}</h5>
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
      {/* {searchTerm &&  <CardList flashcards={filtereddFlashcards}/>} */}
      {searchTerm && filteredFlashcards.map(card=>(<SearchCard key={card.id} card={card} />))}

      
    </>
  );
}
