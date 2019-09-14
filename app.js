const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Hey guys, i'm working!").end();
})

module.exports = app;