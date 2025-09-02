import { useState } from "react";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { nanoid } from "nanoid";

function OpenAIComponent({ addFlashcard, words }) {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState([]);

  async function callOpenAiApi() {
    const base = process.env.REACT_APP_BACKEND_URL || "http://192.168.0.3:3001";
    const res = await fetch(`${base}/api/generate-vocab`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      console.error("Backend error:", await res.text());
      alert("Failed to get AI response");
      return;
    }

    const data = await res.json();
    // Expect { items: [{ front, back, example }, ...] }
    const parsed = data?.items || [];
    setAnswer(parsed);
  }

  function addToLeitnerbox(vocab) {
    const newFlashcard = {
      id: nanoid(),
      box: parseInt(0),
      level: parseInt(1),
      front: vocab.front,
      back: vocab.back,
      example: vocab.example,
    };
    addFlashcard(newFlashcard);
    // Remove the card from the answer array
    const updatedAnswer = answer.filter((item) => item.front !== vocab.front);
    setAnswer(updatedAnswer);
  }

  function remove(vocab) {
    const updatedAnswer = answer.filter((item) => item.front !== vocab.front);
    setAnswer(updatedAnswer);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form.Group>
            <Form.Label>Enter your text:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Input your text (for example '5 English vocabulary word about food')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </Form.Group>
          <Button className="mb-4 mt-2" variant="dark" onClick={callOpenAiApi}>
            Get the answer from api
          </Button>
        </Col>
      </Row>
      <Row>
        {answer.length > 0 &&
          answer.map((vocab, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>English: {vocab.front}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    German: {vocab.back}
                  </Card.Subtitle>
                  <Card.Text>Example: {vocab.example}</Card.Text>
                  <Button
                    style={{ marginRight: "20px" }}
                    variant="success"
                    onClick={() => addToLeitnerbox(vocab)}
                  >
                    Add to Leitnerbox
                  </Button>
                  <Button
                    variant="danger"
                    className="ml-3"
                    onClick={() => remove(vocab)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default OpenAIComponent;
