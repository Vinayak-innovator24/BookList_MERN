// server.js
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const bookRoutes = require('./routes/books');

const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use('/api/books', bookRoutes);
app.get("/", (req, res) => {
  res.send("hello");
})

app.listen(PORT, (res) => {
  console.log(`Server is running on port ${PORT}`);
});
