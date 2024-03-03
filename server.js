const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');

const PORT = process.env.PORT || 3001;

const app = express();

// Import middleware, "cLog"
app.use(clog);

app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// Default and wildcard route to direct user to homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);