const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// default route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js server!');
});

module.exports = app;