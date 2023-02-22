
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'Mohammad',
  password: '19981998M.gh',
  database: 'flashcards',
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get('/api/get', async (req, res) => {
  const sqlSelect =
    "SELECT * FROM flashcard;";

  try {
    const [rows, fields] = await db.query(sqlSelect);
    console.log(fields);
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
})

app.delete('/api/delete/:id', async (req, res) => {
  const id = req.params.id;
  const sqlDelete =
    "DELETE FROM flashcard WHERE id = ?;";

  try {
    const [rows, fields] = await db.query(sqlDelete, [id]);
    console.log(fields);
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/insert', async (req, res) => {

  const id = req.body.id;
  const box = req.body.box;
  const level = req.body.level;
  const front = req.body.front;
  const back = req.body.back;
  const example = req.body.example;


  const sqlQuery =
    "INSERT INTO flashcard (id,box, level, front, back, example) VALUES (?,?,?,?,?,?);";

  try {
    const [rows, fields] = await db.query(sqlQuery, [id, box, level, front, back, example]);
    console.log(fields);
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }


})

app.put("/api/editCard", async (req, res) => {
  const id = req.body.id;
  const box = req.body.box;
  const level = req.body.level;
  const front = req.body.front;
  const back = req.body.back;
  const example = req.body.example;

  const sqlEdit = "UPDATE flashcard SET box=?, level=?, front=?, back=?, example=? WHERE id=?;";

  try {
    const [rows, fields] = await db.query(sqlEdit, [box, level, front, back, example, id]);
    console.log(fields);
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
})

app.put('/api/increaseLevels', async (req, res) => {
  const { cards } = req.body;
  const promises = [];

  for (const card of cards) {
    promises.push(db.query('UPDATE flashcard SET level = ? WHERE id = ?', [card.level + 1, card.id]));
  }

  try {
    await Promise.all(promises);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


app.listen(3001, () => {
  console.log('running on port 3001');
});
