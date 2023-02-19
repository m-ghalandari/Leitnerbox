import React, { useState } from "react";
import { nanoid } from "nanoid";
import Button from "react-bootstrap/Button";

export default function VocabularyForm({ addFlashcard }) {
  const [showVocabularyForm, setShowVocabularyForm] = useState(false);
  const [word, setWord] = useState("");
  const [explanation, setExplanation] = useState("");
  const [example, setExample] = useState("");
  const [level, setLevel] = useState(0);
  const [box, setBox] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFlashcard = {
      id: nanoid(),
      box: parseInt(box),
      level: parseInt(level),
      front: word,
      back: explanation,
      example: example,
    };

    addFlashcard(newFlashcard);
    console.log(newFlashcard);
    setWord('');
    setExplanation('');
    setExample('');
    setLevel(0);
    setBox(0);
    
  };

  

  return (
    <>
    
    <div className="App d-grid gap-4">
      
      <Button
        variant="primary"
        size="lg"
        onClick={() => setShowVocabularyForm(!showVocabularyForm)}
      >
        Add a new vocabulary 
      </Button>

      {showVocabularyForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              type="text"
              className="form-control"
              placeholder="vocabulary"
            />
          </div>
          <div className="form-group mt-3">
            <input
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="meaning"
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              value={example}
              onChange={(e) => setExample(e.target.value)}
              className="form-control"
              cols="45"
              rows="5"
              placeholder="example"
            ></textarea>
          </div>
          
          <div className="form-group mt-3">
            <label>Box number</label>
            <input
              value={box}
              onChange={(e) => setBox(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Reserved card"
            />
          </div>
          <div className="form-group mt-3">
            <label>Level number</label>
            <input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary mt-3">SAVE</button>
        </form>
      )}
    </div>
    
    </>
  );
}
