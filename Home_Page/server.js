const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'Home_Page' folder
app.use(express.static(path.join(__dirname, 'Home_Page')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Home_Page', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
