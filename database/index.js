const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:
    
})


app.get('/', (req, res)=>{
    res.send('hello momo');
})

app.listen(3001, ()=>{
    console.log('running on port 3001');
})