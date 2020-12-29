// Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const mtg = require('mtgsdk')

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

// ------------------------------------  finding cards json -------------------------------------------------
// Find specific card
mtg.card.find(3)
.then(result => {
    console.log(result.card.name) // "Black Lotus"
    console.log(result.card.imageUrl)
});

// Testing
mtg.set.where({ block: 'Shadows over Innistrad', border: 'black' })
.then(sets => {
  console.log(sets[0].name) // "Welcome Deck 2016"
  console.log(sets[1].name) // "Shadows over Innistrad"
  console.log(sets[2].block) // "Eldritch Moon"
});

// Scryfall API examples
// https://api.scryfall.com/sets/znr
// https://api.scryfall.com/cards/search?order=set&q=e%3Aznr&unique=prints

// ------------------------------------ card rarity -------------------------------------------------
// const common;
// const uncommon;
// const rare;
// const mythic;
// how draftpod does their card function
// export rare(card) => {
//     return rarity(["rare"](card));
// }



// how draftpod does their rare/mythic choice
// packRareChoice(card) {
//     if (Math.random() <= (1/8)) {
//         return mythic(card);
//     } else {
//         return rare(card);
//     }
// }

// ------------------------------------ set parsing -------------------------------------------------
const eldData = fs.readFileSync('static/sets/eld.json');
const eldSet = JSON.parse(eldData);

const ikoData = fs.readFileSync('static/sets/iko.json');
const ikoSet = JSON.parse(ikoData);

const m21Data = fs.readFileSync('static/sets/m21.json');
const m21Set = JSON.parse(m21Data);

const thbData = fs.readFileSync('static/sets/thb.json');
const thbSet = JSON.parse(thbData);

const znrData = fs.readFileSync('static/sets/znr.json');
const znrSet = JSON.parse(znrData);


console.log('node w orking');

module.exports = app;