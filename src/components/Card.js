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
//         <div>
//           <div>Back: {card.back}</div>
//           <div>Example: {card.example}</div>
//         </div>
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
import "./Card.css";

export default function Card({ card, deleteFlashcard, updataFlashcard }) {
  const [showBack, setShowBack] = useState(false);
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
          onClick={() => updataFlashcard(card, true)}
          size="30"
        />
        <VscChromeClose
          className="text-danger"
          onClick={() => updataFlashcard(card, false)}
          size="30"
        />
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import { MdDeleteForever } from "react-icons/md";
// import { VscCheck, VscChromeClose } from "react-icons/vsc";
// import { Container, Row, Col, Card as C, Button } from "react-bootstrap";

// export default function Card({ card, deleteFlashcard, updataFlashcard }) {
//   const [showBack, setShowBack] = useState(false);
//   return (
//     <>
//       <Row>
//         <Col md={12}>
//           <C>
//             <C.Body>
//               <C.Title>Front: {card.front}</C.Title>
//               <C.Text>
//                 <Button
//                   variant="secondary"
//                   onClick={() => setShowBack(!showBack)}
//                 >
//                   Show Back
//                 </Button>
//                 {showBack && (
//                   <div className="row mt-3">
//                     <div className="col-6">
//                       <p className="font-weight-bold">Back</p>
//                       <p>{card.back}</p>
//                     </div>
//                     <div className="col-6">
//                       <p className="font-weight-bold">Example</p>
//                       <p>{card.example}</p>
//                     </div>
//                   </div>
//                 )}
//               </C.Text>
//               {/* <div className="text-right">
//                 <MdDeleteForever
//                   onClick={() => deleteFlashcard(card.id)}
//                   size={30}
//                   className="text-right"
//                 />
//                 <VscCheck
//                   onClick={() => updataFlashcard(card, true)}
//                   size={30}
//                 />
//                 <VscChromeClose
//                   onClick={() => updataFlashcard(card, false)}
//                   size={30}
//                 /> */}
//               <div className="text-left">
//                 <VscCheck
//                   onClick={() => updataFlashcard(card, true)}
//                   size={30}
//                 />
//                 <VscChromeClose
//                   onClick={() => updataFlashcard(card, false)}
//                   size={30}
//                 />
//               </div>
//               <div className="text-right">
//                 <MdDeleteForever
//                   onClick={() => deleteFlashcard(card.id)}
//                   size={30}
//                   className="text-right"
//                 />
//               </div>
//             </C.Body>
//           </C>
//         </Col>
//       </Row>
//     </>
//   );
// }
