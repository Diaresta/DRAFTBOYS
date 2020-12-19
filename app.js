const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Port Started');
});

console.log('node working');



// app.use(express.static(__dirname + '/public'));

// http.createServer(app).listen(3000);

// maybe use restify?