import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Level from "./Level";

const LevelList = ({ numberOflevelBox }) => {
  const [showLevels, setShowLevels] = useState(Array(numberOflevelBox).fill(false));

  return (
    <Container>
      <div className="d-grid gap-4">
        {Array.from({ length: numberOflevelBox }, (_, i) => (
          <>
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                setShowLevels((prev) =>
                  prev.map((val, j) => (j === i ? !val : val))
                )
              }
            >
              Level {i + 1}
            </Button>

            {showLevels[i] && <Level />}
          </>
        ))}
      </div>
    </Container>
  );
};

export default LevelList;
