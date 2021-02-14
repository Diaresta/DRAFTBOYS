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

// Routing
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
    title: 'DRAFTBOYS - Draft',
    setName: 'Zendikar Rising'
}));

app.get('/draft/m21', (req, res) => res.render('draft', {
    title: 'DRAFTBOYS - Draft',
    setName: 'Core Set 2021'
}));

app.get('/draft/iko', (req, res) => res.render('draft', {
    title: 'DRAFTBOYS - Draft',
    setName: 'Ikoria: Lair of Behemoths'
}));

app.get('/draft/thb', (req, res) => res.render('draft', {
    title: 'DRAFTBOYS - Draft',
    setName: 'Theros Beyond Death'
}));

app.get('/draft/eld', (req, res) => res.render('draft', {
    title: 'DRAFTBOYS - Draft',
    setName: 'Throne of Eldraine'
}));

app.use(function (req, res, next) {
    res.status(404);
    res.render('error-page', {
        title: 'DRAFTBOYS - 404 Error',
    });

});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

console.log('node working');

module.exports = app;

// ------------------------------------ backup set parsing -------------------------------------------------
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