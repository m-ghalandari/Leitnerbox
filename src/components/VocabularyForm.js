import React, { useState } from "react";

export default function VocabularyForm() {

  const [word, setWord] = useState('');
  const [explanation, setExplanation] = useState('');
  const [example, setExample] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('word, explanation, example', word, explanation, example)

    // Ein Objekt von der gelesenen Daten mit zusäzlichen Informationen erzeugen.

    // Das Objekt in Datenbank einfügen.
    setWord('');
    setExplanation('');
    setExample('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <input value={word} onChange={(e)=>setWord(e.target.value)} type="text" className="form-control" placeholder="Das Wort" />
      </div>
      <div className="form-group mt-3">
        <input
        value={explanation} onChange={(e)=>setExplanation(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Die Bedeutung"
        />
      </div>
      <div className="form-group mt-3">
        <textarea
        value={example} onChange={(e)=>setExample(e.target.value)}
          className="form-control"
          cols="45"
          rows="5"
          placeholder="Das Beispiel"
        ></textarea>
      </div>
      <button className="btn btn-primary mt-3">Speichern</button>
    </form>
  );
}
