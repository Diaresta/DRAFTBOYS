// Imports
const express = require('express');
const app = express();
const path = require('path');
const mtg = require('mtgsdk')
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

// find specific card
mtg.card.find(3)
.then(result => {
    console.log(result.card.name) // "Black Lotus"
    console.log(result.card.imageUrl)
});

// testing
mtg.set.where({ block: 'Shadows over Innistrad', border: 'black' })
.then(sets => {
  console.log(sets[0].name) // "Welcome Deck 2016"
  console.log(sets[1].name) // "Shadows over Innistrad"
  console.log(sets[2].block) // "Eldritch Moon"
});

module.exports = app;

console.log('node working');



// app.use(express.static(__dirname + '/public'));