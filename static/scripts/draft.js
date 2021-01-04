console.log('Hi');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        var packCount = 0;

        const commonFilter = response.filter((set) => {
            return set.rarity == 'common';
        });

        const uncommonFilter = response.filter((set) => {
            return set.rarity == 'uncommon';
        });

        const rareFilter = response.filter((set) => {
            if (Math.random() <= (1/8)) {
                return set.rarity == 'mythic';
            } else {
                return set.rarity == 'rare';
            }
        });

        function commonCards(amount){
            for (let i = 0; i < amount; i++){
                var znrCards = commonFilter[Math.floor(Math.random() * commonFilter.length)];
                
                // Card values
                var znrCommonCardName = znrCards.name;
                var znrCommonCardRarity = znrCards.rarity;
                var znrCommonCardImg = znrCards.image_uris[0];   
    
                // Appending Card Images to Webpage
                const cardImage = document.createElement('img');
                const packsCardsDiv = document.getElementById('packsCards');
                cardImage.src = znrCommonCardImg;
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
        };

        function uncommonCards(amount){
            for (let i = 0; i < amount; i++){
                var znrCards = uncommonFilter[Math.floor(Math.random() * uncommonFilter.length)];
                
                // Card values
                var znrUncommonCardName = znrCards.name;
                var znrUncommonCardRarity = znrCards.rarity;
                var znrUncommonCardImg = znrCards.image_uris[0];   
    
                // Appending Card Images to Webpage
                const cardImage = document.createElement('img');
                const packsCardsDiv = document.getElementById('packsCards');
                cardImage.src = znrUncommonCardImg;
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
        };

        function rareCard(amount){
            for (let i = 0; i < amount; i++){
                var znrCards = rareFilter[Math.floor(Math.random() * rareFilter.length)];
                
                // Card values
                var znrRareCardName = znrCards.name;
                var znrRareCardRarity = znrCards.rarity;
                var znrRareCardImg = znrCards.image_uris[0];   
    
                // Appending Card Images to Webpage
                const cardImage = document.createElement('img');
                const packsCardsDiv = document.getElementById('packsCards');
                cardImage.src = znrRareCardImg;
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
        };
        
        function boosterPack(){
            commonCards(10);
            uncommonCards(3)
            rareCard(1);
        };

        boosterPack();
        
    } else; 
    // Add error handling
};
xhttp.open("GET", "/static/sets/znr.json", true);
xhttp.send();
