// Imports
const express = require('express');
const app = express();
const path = require('path');
// const fs = require('fs');   
// const http = require('http');

// Static Files
app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(express.static('static'));
// app.use('/css', express.static(__dirname + 'static/css'));
// app.use('/img', express.static(__dirname + 'static/img'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
    // res.sendFile(path.resolve(__dirname, './templates/index.html'));
});

app.get('/test', (req, res) => {
    res.send('test');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

module.exports = app;

console.log('node working');



// app.use(express.static(__dirname + '/public'));

// http.createServer(app).listen(3000);

// maybe use restify?