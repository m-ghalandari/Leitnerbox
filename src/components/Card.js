
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { VscCheck, VscChromeClose } from "react-icons/vsc";
import "./Card.css";
import CardForm from "./CardForm";

export default function Card({ card, deleteFlashcard, correct_or_wrongAnswer, editFlashcard }) {
  const [showBack, setShowBack] = useState(false);
  const [editing, setEditing] = useState(false);
  const [updatedCard, setUpdatedCard] = useState(card);

  const handleEditClick = () => {
    setEditing(!editing);
  };


  return (
    <div className="card m-3 p-3">

      <p className="font-weight-bold text-center mb-3"><h3>{card.front}</h3></p>
      <div className="text-center">
        <button
          className="btn btn-outline-dark mb-3"
          onClick={() => setShowBack(!showBack)}
        >
          Show Back
        </button>
      </div>
      {showBack && (
        <div className="mb-4">
          <div className="font-weight-bold mb-3"><h3>Back:</h3> <h4>{card.back}</h4></div>
          <div className="font-weight-bold"><h3>Example:</h3> <h4>{card.example}</h4></div>
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center">
        <MdDeleteForever
          className="text-danger mr-3"
          onClick={() => deleteFlashcard(card.id)}
          size="30"
        />
        <VscCheck
          className="text-success mr-3"
          onClick={() => correct_or_wrongAnswer(card, true)}
          size="30"
        />
        <VscChromeClose
          className="text-danger"
          onClick={() => correct_or_wrongAnswer(card, false)}
          size="30"
        />
        <button
          className="btn btn-outline-dark mr-3"
          onClick={() => handleEditClick()}
        >
          Edit
        </button>
      </div>
      {editing && (
        <div>
          <CardForm
            card={updatedCard}
            onSubmit={editFlashcard}
            onCancel={setEditing}
          />
        </div>
      )}
    </div>
  );
}

