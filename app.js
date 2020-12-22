// Imports
// const { response } = require('express');
const express = require('express');
// const fs = require('fs');   
// const http = require('http');
const path = require('path');
const app = express();

// Static Files
app.use('/public', express.static(path.join(__dirname, 'templates')));
// app.use(express.static('static'));
// app.use('/css', express.static(__dirname + 'static/css'));
// app.use('/img', express.static(__dirname + 'static/img'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
    // res.sendFile(path.resolve(__dirname, './templates/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

module.exports = app;

console.log('node working');



// app.use(express.static(__dirname + '/public'));

// http.createServer(app).listen(3000);

// maybe use restify?