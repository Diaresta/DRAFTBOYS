console.log('Hi');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        // Loop through set and separate card rarities
        // for (let i = 0; i < 271; i++){
        //     if (response[i].rarity == 'common'){
        //         var znrCommonCardName = response[i].name;
        //         var znrCommonCardRarity = response[i].rarity;
        //         var znrCommonCardImg = response[i].image_uris[0];
        //         // console.log(znrCommonCardName);
        //     } else if (response[i].rarity == 'uncommon') {
        //         var znrUncommonCardName = response[i].name;
        //         var znrUncommonCardRarity = response[i].rarity;
        //         var znrUncommonCardImg = response[i].image_uris[0];
        //         // console.log(znrUncommonCardImg);
        //     } else if (response[i].rarity == 'rare') {
        //         var znrRareCardName = response[i].name;
        //         var znrRareCardRarity = response[i].rarity;
        //         var znrRareCardImg = response[i].image_uris[0];
        //         // console.log(znrRareCardImg);                
        //     } else if (response[i].rarity == 'mythic') {
        //         var znrMythicCardName = response[i].name;
        //         var znrMythicCardRarity = response[i].rarity;
        //         var znrMythicCardImg = response[i].image_uris[0];
        //         // console.log(znrMythicCardImg);                      
        //     }
        // }

        // Loop through json for random cards
        for (let i = 0; i < 10; i++){
        var znrCards = response[Math.floor(Math.random() * 270)];

        // Card values
        var znrCardName = znrCards.name;
        var znrCardRarity = znrCards.rarity;
        var znrCardImg = znrCards.image_uris[0];

        // console.log(znrCardName);
        // console.log(znrCardRarity);
        // console.log(znrCardImg);        

        // Appending Card Images to Webpage
        const cardImage = document.createElement('img');
        const packsCardsDiv = document.getElementById('packsCards');
        cardImage.src = znrCardImg;
        cardImage.className = 'draftCards';
        packsCardsDiv.append(cardImage);
        }
    } else; 
    // Add error handling
};
xhttp.open("GET", "/static/sets/znr.json", true);
xhttp.send();
