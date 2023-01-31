import React from "react";

export default function Search() {
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
        />
      </div>
    </>
  );
}
