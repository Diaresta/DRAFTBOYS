// Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

// Static Files
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());


// ----- testing -----
// Handlebars MW
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get(['/', '/home', '/draft'], (req, res) => res.render('home', {
    title: 'DRAFTBOYS - MTG Draft Simulator'
}));

app.get('/all_sets', (req, res) => res.render('all-sets', {
    title: 'DRAFTBOYS - All Sets'
}));

app.get('/contact', (req, res) => res.render('contact', {
    title: 'DRAFTBOYS - Contact'
}));

app.get('/draft/znr', (req, res) => res.render('draft', {
    title: 'DRAFTBOYS - Draft'
}));

// // Routing
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
//     console.log('Testing');
// });

// app.get('/all_sets', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', '/views/all-sets.html'));
//     console.log('Testing');
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static/views', 'contact.html'));
// });

// app.get('/draft', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static/views', 'draft.html'));
// });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
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