const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use('/css', express.static(path.resolve(__dirname, './static/styles.css')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './templates/index.html'));
});

app.listen(3000, () => {
    console.log('Port Started');
});

module.exports = app;

console.log('node working');



// app.use(express.static(__dirname + '/public'));

// http.createServer(app).listen(3000);

// maybe use restify?