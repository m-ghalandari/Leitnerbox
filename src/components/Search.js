// import React from "react";

// export default function Search({flashcards}) {
  
//   return (
//     <>
//       <h1 className="text-center mt-3">Leitner-System</h1>
//       <div className="input-group rounded mb-5 mt-3">
//         <input
//           type="search"
//           className="form-control rounded"
//           placeholder="Search for a flashcard..."
//           aria-label="Search"
//           aria-describedby="search-addon"
//         />
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import CardList from "./CardList";

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

  return (
    <>
      <h1 className="text-center mt-3">Leitner-System</h1>
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
      {searchTerm &&  <CardList flashcards={filtedFlashcards}/>}
      
    </>
  );
}
