const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change the port if needed

// Serve static files (your HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '')));

// When accessing the root, serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
