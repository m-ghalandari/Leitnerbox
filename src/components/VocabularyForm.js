
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Button from "react-bootstrap/Button";

export default function VocabularyForm({ addFlashcard }) {
  const [showVocabularyForm, setShowVocabularyForm] = useState(false);
  const [word, setWord] = useState("");
  const [explanation, setExplanation] = useState("");
  const [example, setExample] = useState("");
  const [level, setLevel] = useState(1);
  const [box, setBox] = useState(0);
  const [showBoxLevel, setShowBoxLevel] = useState(false);

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
    setLevel(1);
    setBox(0);

  };

  const handleBoxChange = (e) => {
    const value = parseInt(e.target.value);
    setBox(value);

    // Set max level based on box number
    if (value === 1) {
      setLevel(Math.min(level, 2));
    } else if (value === 2) {
      setLevel(Math.min(level, 4));
    } else if (value === 3) {
      setLevel(Math.min(level, 8));
    } else if (value === 4) {
      setLevel(Math.min(level, 16));
    }
  };

  const handleLevelChange = (e) => {
    const value = parseInt(e.target.value);

    // Set level within box limit
    if (box === 1) {
      setLevel(Math.min(value, 2));
    } else if (box === 2) {
      setLevel(Math.min(value, 4));
    } else if (box === 3) {
      setLevel(Math.min(value, 8));
    } else if (box === 4) {
      setLevel(Math.min(value, 16));
    }
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
                required="true"
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                type="text"
                className="form-control"
                placeholder="meaning"
                cols="45"
                rows="3"
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                value={example}
                onChange={(e) => setExample(e.target.value)}
                className="form-control"
                cols="45"
                rows="3"
                placeholder="example"
              ></textarea>
            </div>
            {showBoxLevel && <div>
              <div className="form-group mt-3">
                <label>Box number</label>
                <input
                  value={box}
                  onChange={handleBoxChange}
                  type="range"
                  className="form-range"
                  min="1"
                  max="4"
                  step="1"
                />
                <span>{box}</span>
              </div>
              <div className="form-group mt-3">
                <label>Level number</label>
                <input
                  value={level}
                  onChange={handleLevelChange}
                  type="range"
                  className="form-range"
                  min="1"
                  max={box === 1 ? 2 : box === 2 ? 4 : box === 3 ? 8 : 16}
                  step="1"
                />
                <span>{level}</span>
              </div>
            </div>
            }

            <div className="d-flex justify-content-between">
              {!showBoxLevel && <button className="btn btn-primary mt-3" onClick={()=>setShowBoxLevel(true)}>SET BOX AND LEVEL</button>}
              {showBoxLevel && <button className="btn btn-primary mt-3" onClick={()=>setShowBoxLevel(false)}>HIDE BOX AND LEVEL</button>}
              <button className="btn btn-primary mt-3">SAVE</button>
            </div>

          </form>
        )}
      </div>

    </>
  );
}

