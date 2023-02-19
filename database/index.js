// const express = require('express');
// const app = express();
// const mysql = require('mysql');

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'Mohammad',
//     password: '19981998M.gh',
//     database: 'flashcards',
// })


// app.get('/', (req, res)=>{
//     // const sqlQuery = "INSERT INTO flashcard (question, answer, example, box, level) VALUE ('whats your name', 'momo', 'i am momo', '0','0');"
//     const sqlQuery = "INSERT INTO flashcard (question, answer, example, box, level) VALUES ('whats your name', 'momo', 'i am momo', 0, 0);"

//     db.query(sqlQuery, (err, result)=>{
//         console.log(err)
//         res.send(result);
//     })
//     res.send('hello momo');
// })

// app.listen(3001, ()=>{
//     console.log('running on port 3001');
// })

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
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())

app.post('/api/insert', async (req, res)=>{

    const id = req.body.id;
    const box = req.body.box;
    const level = req.body.level;
    const front = req.body.front;
    const back = req.body.back;
    const example = req.body.example;


    const sqlQuery =
    "INSERT INTO flashcard (id,box, level, front, back, example) VALUES (?,?,?,?,?,?);";

      try {
    const [rows, fields] = await db.query(sqlQuery, [id,box,level,front,back,example]);
    console.log(fields);
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }


})


app.listen(3001, () => {
  console.log('running on port 3001');
});
