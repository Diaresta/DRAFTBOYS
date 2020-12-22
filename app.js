// Imports
const express = require('express');
const app = express();
const path = require('path');

// const fs = require('fs');   
// const http = require('http');

// Static Files
app.use(express.static(path.join(__dirname, 'static')));

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

module.exports = app;

console.log('node working');



// app.use(express.static(__dirname + '/public'));