console.log('Hi');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
    } else; 
    //error handling
    
    var counter = 0;
    do {
        // Randomly loops through json 
        var znrCards = response[Math.floor(Math.random() * 270)];

        var znrCardName = znrCards.name;
        var znrCardRarity = znrCards.rarity;
        var znrCardImg = znrCards.image_uris[0];

        // console.log(znrCardName);
        // console.log(znrCardRarity);
        console.log(znrCardImg);

        counter += 1;
    } while (counter < 10);

    for (let i = 0; i < 10; i++){
        // output += znrCards[i].image_uris[0];
        const cardImage = document.createElement('img');
        const packsCardsDiv = document.getElementById('packsCards');
        cardImage.src = znrCardImg;
        cardImage.className = 'draftCards';
        packsCardsDiv.append(cardImage);
    }
};
xhttp.open("GET", "/static/sets/znr.json", true);
xhttp.send();
