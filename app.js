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

// ------------------------------------  finding cards json -------------------------------------------------
// loop through set for name/rarity
// for (let i = 0; i < znrSet.length; i++) {
//     // console.log(znrSet[i].name);
//     // console.log(znrSet[i].rarity);
//     // console.log(Math.floor(Math.random() * i));
//     console.log(znrSet[Math.floor(Math.random() * 270)].name);
// }

var counter = 0;

do {
    // Randomly loops through json 
    const znrCards = znrSet[Math.floor(Math.random() * 270)];

    console.log(znrCards.name);
    console.log(znrCards.rarity);
    console.log(znrCards.image_uris[0]);

    counter += 1;
} while (counter < 10);

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

// --------------------------------------------------------------------------------------------------

console.log('node working');

module.exports = app;