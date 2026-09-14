const express = require('express');
const path = require('path');
const app = express();

// Render assigns a dynamic port automatically, fallback to 10000
const port = process.env.PORT || 10000;

// Serve static frontend files from the root directory
app.use(express.static(path.join(__dirname, '/')));

// Fallback route to load your index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
