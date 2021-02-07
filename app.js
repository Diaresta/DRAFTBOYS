// Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const fs = require('fs');

// Static Files
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

// Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
    console.log('Testing');
});

app.get('/draft', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/views', 'draft.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

console.log('node working');

module.exports = app;

// ------------------------------------ set parsing -------------------------------------------------
// const eldData = fs.readFileSync('static/sets/eld.json');
// const eldSet = JSON.parse(eldData);

// const ikoData = fs.readFileSync('static/sets/iko.json');
// const ikoSet = JSON.parse(ikoData);

// const m21Data = fs.readFileSync('static/sets/m21.json');
// const m21Set = JSON.parse(m21Data);

// const thbData = fs.readFileSync('static/sets/thb.json');
// const thbSet = JSON.parse(thbData);

// const znrData = fs.readFileSync('static/sets/znr.json');
// const znrSet = JSON.parse(znrData);