// import React, { useState } from "react";
// import { MdDeleteForever } from "react-icons/md";
// import { VscCheck, VscChromeClose } from "react-icons/vsc";

// export default function Card({ card, deleteFlashcard, updataFlashcard }) {
//   const [showBack, setShowBack] = useState(false);
//   return (
//     <div className="card">
//       <p>Front: {card.front}</p>
//       <button onClick={() => setShowBack(!showBack)}>Show Back</button>
//       {showBack && (
//         <>
//           <p>Back: {card.back}</p>
//           <p>Example: {card.example}</p>
//         </>
//       )}
//       <MdDeleteForever onClick={() => deleteFlashcard(card.id)} />
//       <VscCheck
//         onClick={() => updataFlashcard(card, true)}
//       />
//       <VscChromeClose
//         onClick={() => updataFlashcard(card, false)}
//       />
//     </div>
//   );
// }
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { VscCheck, VscChromeClose } from "react-icons/vsc";
import { Container, Row, Col, Card as C, Button } from "react-bootstrap";

export default function Card({ card, deleteFlashcard, updataFlashcard }) {
  const [showBack, setShowBack] = useState(false);
  return (
    <>
      <Row>
        <Col md={12}>
          <C>
            <C.Body>
              <C.Title>Front: {card.front}</C.Title>
              <C.Text>
                <Button
                  variant="secondary"
                  onClick={() => setShowBack(!showBack)}
                >
                  Show Back
                </Button>
                {showBack && (
                  // <>
                  //   <p>Back: {card.back}</p>
                  //   <p>Example: {card.example}</p>
                  // </>
                  <div className="row mt-3">
                    <div className="col-6">
                      <p className="font-weight-bold">Back</p>
                      <p>{card.back}</p>
                    </div>
                    <div className="col-6">
                      <p className="font-weight-bold">Example</p>
                      <p>{card.example}</p>
                    </div>
                  </div>
                )}
              </C.Text>
              <div className="text-right">
                <MdDeleteForever
                  onClick={() => deleteFlashcard(card.id)}
                  size={30}
                />
                <VscCheck
                  onClick={() => updataFlashcard(card, true)}
                  size={30}
                />
                <VscChromeClose
                  onClick={() => updataFlashcard(card, false)}
                  size={30}
                />
              </div>
            </C.Body>
          </C>
        </Col>
      </Row>
    </>
  );
}
