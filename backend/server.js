const http = require("http");
const express = require("express");
var cors = require('cors')
const path = require('path');

// Configure env vars in env file
require('dotenv').config();

// init app
const app = express();

app.use(cors());
app.use(express.json({ limit: '10kb' })); // Parse JSON

const port = process.env.PORT || 8000;
const server = http.createServer(app);

console.log("hi");

app.use(express.static('../frontend/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
})

// Serve static assets in production (client)
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
    })
}

server.listen(port, () => console.log(`server is running on port ${port}`));