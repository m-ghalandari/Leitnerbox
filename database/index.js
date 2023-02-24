
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
const fs = require('fs');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '19981998M.gh',
  database: 'cards',
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get('/api/get', async (req, res) => {
  const sqlSelect =
    "SELECT * FROM flashcards;";

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
    "DELETE FROM flashcards WHERE id = ?;";

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
    "INSERT INTO flashcards (id,box, level, front, back, example) VALUES (?,?,?,?,?,?);";

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

  const sqlEdit = "UPDATE flashcards SET box=?, level=?, front=?, back=?, example=? WHERE id=?;";

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
    promises.push(db.query('UPDATE flashcards SET level = ? WHERE id = ?', [card.level + 1, card.id]));
  }

  try {
    await Promise.all(promises);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

async function readAll() {
  const data = JSON.parse(fs.readFileSync('./db.json'));
  const promises = [];

  for (const card of data.flashcards){
    promises.push(db.query("INSERT INTO flashcards (id,box, level, front, back, example) VALUES (?,?,?,?,?,?);",[card.id,card.box,card.level, card.front, card.back, card.example]))

  }
  try {
    await Promise.all(promises);
  }catch (error){
    console.log(error);
  }
}

//readAll();


app.listen(3001, () => {
  console.log('running on port 3001');
});
