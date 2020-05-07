const express = require('express');
const path = require('path');
const db = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
