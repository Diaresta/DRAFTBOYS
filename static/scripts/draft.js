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
        // for (let i = 0; i < 10; i++){
        //     var znrCards = response[Math.floor(Math.random() * 270)];

        //     // Card values
        //     var znrCardName = znrCards.name;
        //     var znrCardRarity = znrCards.rarity;
        //     var znrCardImg = znrCards.image_uris[0];

        //     // console.log(znrCardName);
        //     // console.log(znrCardRarity);
        //     // console.log(znrCardImg);        

        //     // Appending Card Images to Webpage
        //     const cardImage = document.createElement('img');
        //     const packsCardsDiv = document.getElementById('packsCards');
        //     cardImage.src = znrCardImg;
        //     cardImage.className = 'draftCards';
        //     packsCardsDiv.append(cardImage);

        //     // Appending Card Images to Selected Area
        //     const selectedContainer = document.getElementById('selectedContainer');
            
        //     cardImage.onclick = () => PickCard();
            
        //     function PickCard() {
        //         packsCardsDiv.removeChild(cardImage);    
        //         selectedContainer.append(cardImage);
        //         cardImage.className = 'selectedCards';
        //     }
        // }

            // --------------------------------------------------------------- testing

            var packCount = 0;

            const commonFilter = response.filter((set) => {
                return set.rarity == 'common';
            });

            function commonCards(amount){
                for (let i = 0; i < amount; i++){
                    var znrCards = commonFilter[Math.floor(Math.random() * commonFilter.length)];
                    
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
                    cardImage.name = packCount;
                    packsCardsDiv.append(cardImage);
        
                    // Appending Card Images to Selected Area
                    const selectedContainer = document.getElementById('selectedContainer');
                    
                    cardImage.onclick = () => PickCard();
                    
                    function PickCard() {
                        packsCardsDiv.removeChild(cardImage);    
                        selectedContainer.append(cardImage);
                        cardImage.className = 'selectedCards';
                        cardImage.name = 'selected';
                    }
                }
                // packCount+= 1;
            }

            // function pack(){
            //     for (let i = 0; i < 14; i++){
            //         var znrCards = commonFilter[Math.floor(Math.random() * commonFilter.length)];
                    
            //         // Card values
            //         var znrCardName = znrCards.name;
            //         var znrCardRarity = znrCards.rarity;
            //         var znrCardImg = znrCards.image_uris[0];
        
            //         // console.log(znrCardName);
            //         // console.log(znrCardRarity);
            //         // console.log(znrCardImg);        
        
            //         // Appending Card Images to Webpage
            //         const cardImage = document.createElement('img');
            //         const packsCardsDiv = document.getElementById('packsCards');
            //         cardImage.src = znrCardImg;
            //         cardImage.className = 'draftCards';
            //         cardImage.name = packCount;
            //         packsCardsDiv.append(cardImage);
        
            //         // Appending Card Images to Selected Area
            //         const selectedContainer = document.getElementById('selectedContainer');
                    
            //         cardImage.onclick = () => PickCard();
                    
            //         function PickCard() {
            //             packsCardsDiv.removeChild(cardImage);    
            //             selectedContainer.append(cardImage);
            //             cardImage.className = 'selectedCards';
            //             cardImage.name = 'selected';
            //         }
            //     }
            //     packCount+= 1;
            // }
            
            function boosterPack(){
                commonCards(10);
                commonCards(4)
            };

            for (let i = 0; i < 1; i++){
                boosterPack();
            };
    
            // var packs = document.getElementsByClassName('draftCards');

            // console.log(packs);
    
            // for (let i = 0; i < packs.length; i++){
            //     if (packs[i].id = '0'){
            //         console.log(packs[11]);
            //     }
            // }
    
            // packs.onclick = () => displayPack();
                    
            // function displayPack() {
            //     console.log('aaaa');
            // }
    
            // --------------------------------------------------------------- testing
    } else; 
    // Add error handling
};
xhttp.open("GET", "/static/sets/znr.json", true);
xhttp.send();
