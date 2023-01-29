
import React from 'react'
import Button from "react-bootstrap/Button";
import Box from "./Box";
export default function BoxButton({levels, flashcards, boxNumber,deleteFlashcard, setShowBox, showBox,updataFlashcard }) {
  return (
    <>
        <Button
          variant="success"
          size="lg"
          onClick={() => setShowBox(!showBox)}
        >
          Box {boxNumber}
        </Button>
        
        {showBox && (
          <Box levels={levels} flashcards={flashcards} boxNumber={boxNumber} deleteFlashcard={deleteFlashcard} updataFlashcard={updataFlashcard}/>
        )}
      </>
  )
}
