import React, { useState } from "react";
import { nanoid } from "nanoid";
import Button from "react-bootstrap/Button";

export default function VocabularyForm({ addFlashcard }) {
  const [showVocabularyForm, setShowVocabularyForm] = useState(false);
  const [word, setWord] = useState("");
  const [explanation, setExplanation] = useState("");
  const [example, setExample] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('word, explanation, example', word, explanation, example)
    const newFlashcard = {
      id: nanoid(),
      box: 0,
      level: 0,
      front: word,
      back: explanation,
      example: example,
    };

    addFlashcard(newFlashcard);
    console.log(newFlashcard);
    // Ein Objekt von der gelesenen Daten mit zusäzlichen Informationen erzeugen.

    // Das Objekt in Datenbank einfügen.
    setWord("");
    setExplanation("");
    setExample("");
  };
  return (
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
              placeholder="Das Wort"
            />
          </div>
          <div className="form-group mt-3">
            <input
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Die Bedeutung"
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              value={example}
              onChange={(e) => setExample(e.target.value)}
              className="form-control"
              cols="45"
              rows="5"
              placeholder="Das Beispiel"
            ></textarea>
          </div>
          <button className="btn btn-primary mt-3">Speichern</button>
        </form>
      )}
    </div>
  );
}
