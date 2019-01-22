const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "tgj_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.post('/projects', (req, res) => {
  connection.query('SELECT * FROM projects', (err, data) => {
    if (err) throw err;
    res.json(data)
  });
});

app.listen(3001, () => {
    console.log("listening on 3001");
});