import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Level from './Level'

const Box = ({ levels , flashcards, boxNumber, deleteFlashcard,updataFlashcard}) => {
  const [showLevels, setShowLevels] = useState(Array(levels).fill(false));
  const boxKarte = flashcards.filter(f=>f.box===boxNumber);



  return (
    <Container >
       
      <div className="d-grid gap-4">
        {Array.from({ length: levels }, (_, i) => (
          <>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowLevels(prev => prev.map((val, j) => j === i ? !val : val))}
            >
              Level {i + 1}
            </Button>

            {showLevels[i] && (
                
            
            <Level level={i} flashcards={boxKarte} deleteFlashcard={deleteFlashcard} updataFlashcard={updataFlashcard}/>
            
            )}
          </>
        ))}
      </div>
    </Container>
  );
};

export default Box;
