import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { VscCheck, VscChromeClose } from "react-icons/vsc";

export default function Card({ card, deleteFlashcard, updataFlashcard }) {
  const [showBack, setShowBack] = useState(false);
  return (
    <div className="card">
      <p>Front: {card.front}</p>
      <button onClick={() => setShowBack(!showBack)}>Show Back</button>
      {showBack && (
        <>
          <p>Back: {card.back}</p>
          <p>Example: {card.example}</p>
        </>
      )}
      <MdDeleteForever onClick={() => deleteFlashcard(card.id)} />
      <VscCheck
        onClick={() => updataFlashcard(card, true)}
      />
      <VscChromeClose
        onClick={() => updataFlashcard(card, false)}
      />
    </div>
  );
}
