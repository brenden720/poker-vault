const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});
const express = require('express');
const apiRouter = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/api', apiRouter);
app.use('/*', express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
