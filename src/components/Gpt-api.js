import { useState } from "react";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { nanoid } from "nanoid";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

function OpenAIComponent({ addFlashcard }) {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState([]);

  async function callOpenAiApi() {
    console.log("calling the api.");

    const con = `Please provide 5 English vocabulary word about ${prompt}, its translation in German, and an example sentence in English. Format it as follows:
    {
      "front": "[English word]",
      "back": "[German translation]",
      "example": "[Example sentence in English using the English word]"
    }`;

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: con },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_tokens: 256,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.choices[0].message.content);
        const jsonString = "[" + data.choices[0].message.content + "]";

        try {
          const parsedAnswer = JSON.parse(jsonString);
          setAnswer(parsedAnswer);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      });
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
              placeholder="Input your text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </Form.Group>
          <Button
            className="mb-4 mt-2"
            variant="primary"
            onClick={callOpenAiApi}
          >
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
