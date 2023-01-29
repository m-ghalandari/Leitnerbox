import React, { useState } from "react";
import Box from "./Box";
import Button from "react-bootstrap/Button";
import LevelList from "./LevelList";

export default function BoxList() {
  const [showBoxes, setShowBoxes] = useState(Array(4).fill(false));

  const toggleBox = (index) => {
    setShowBoxes((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <>
          <Button variant="success" size="lg" onClick={() => toggleBox(i)}>
            Box {i + 1}
          </Button>
          {showBoxes[i] && <LevelList numberOflevelBox={Math.pow(2,i+1)}/>}
        </>
      ))}
    </>
  );
}
