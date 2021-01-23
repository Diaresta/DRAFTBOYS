console.log('Hi');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        // Set h2 element as set name
        if (response[1].set == 'znr'){
            document.getElementById('selectSet').innerHTML = 'Zendikar Rising';
        }

        // Testing -----------------------------------------------------------------------
        // Creates divs for individual packs
        function boosterDiv(){
            const boosterPackDiv = document.getElementById('boosterPackDiv');
            const draftCards = document.getElementsByClassName('draftCards');

            for(let i = 0; i < 8; i++){
                var packDiv = document.createElement('div');
                var packsCardsDiv = document.getElementById('packsCards');
                var packDivAppend = packsCardsDiv.appendChild(packDiv);
                packDivAppend.id = 'boosterPackDiv' + i;
            }

            // ---------- REFACTOR BELOW ----------

            for(let i = 0; i < draftCards.length; i++){
                var testCards0 = document.getElementsByName('0');
                var testDiv0 = document.getElementById('boosterPackDiv0');

                for(let i = 0; i < 7;i ++){
                    testDiv0.append(testCards0[i]);
                }
            }

            for(let i = 0; i < draftCards.length; i++){
                var testCards1 = document.getElementsByName('1');
                var testDiv1 = document.getElementById('boosterPackDiv1');

                for(let i = 0; i < 7;i ++){
                    testDiv1.append(testCards1[i]);
                }
            }

            for(let i = 0; i < draftCards.length; i++){
                var testCards2 = document.getElementsByName('2');
                var testDiv2 = document.getElementById('boosterPackDiv2');

                for(let i = 0; i < 7;i ++){
                    testDiv2.append(testCards2[i]);
                }
            }

            for(let i = 0; i < draftCards.length; i++){
                var testCards3 = document.getElementsByName('3');
                var testDiv3 = document.getElementById('boosterPackDiv3');

                for(let i = 0; i < 7;i ++){
                    testDiv3.append(testCards3[i]);
                }
            }

            for(let i = 0; i < draftCards.length; i++){
                var testCards4 = document.getElementsByName('4');
                var testDiv4 = document.getElementById('boosterPackDiv4');

                for(let i = 0; i < 7;i ++){
                    testDiv4.append(testCards4[i]);
                }
            }

            for(let i = 0; i < draftCards.length; i++){
                var testCards5 = document.getElementsByName('5');
                var testDiv5 = document.getElementById('boosterPackDiv5');

                for(let i = 0; i < 7;i ++){
                    testDiv5.append(testCards5[i]);
                }
            }

            for(let i = 0; i < draftCards.length; i++){
                var testCards6 = document.getElementsByName('6');
                var testDiv6 = document.getElementById('boosterPackDiv6');

                for(let i = 0; i < 7;i ++){
                    testDiv6.append(testCards6[i]);
                }
            }

            for(let i = 0; i < draftCards.length; i++){
                var testCards7 = document.getElementsByName('7');
                var testDiv7 = document.getElementById('boosterPackDiv7');

                for(let i = 0; i < 7;i ++){
                    testDiv7.append(testCards7[i]);
                }
            }
        }
            // ---------- REFACTOR ABOVE ----------
        
        // -------------------------------------------------------------------------------

        // Set number to individual boosters
        var packCount = 0;

        // Filter for common cards
        const commonFilter = response.filter((set) => {
            return set.rarity == 'common';
        });

        // Filter for uncommon cards
        const uncommonFilter = response.filter((set) => {
            return set.rarity == 'uncommon';
        });

        // Filter for rare/mythic card
        const rareFilter = response.filter((set) => {
            if (Math.random() <= (1/8)) {
                return set.rarity == 'mythic';
            } else {
                return set.rarity == 'rare';
            }
        });

        // Randomly selects 10 common cards
        function commonCards(amount){
            boosterCards(10, commonFilter);
        };

        // Randomly selects 3 uncommon cards
        function uncommonCards(amount){
            boosterCards(3, uncommonFilter);
        };

        // Randomly selects rare/mythic card
        function rareCard(amount){
            boosterCards(1, rareFilter);
        };
        
        // Groups cards as a booster pack
        function boosterPack(){
            commonCards();
            uncommonCards()
            rareCard();
            packCount+= 1;
        };

        function draft(amount){
            for (let i = 0; i < amount; i++){
                boosterPack();
            }
            boosterDiv()
        };

        draft(8);

        // Loop through set json and append to webpage
        function boosterCards(amount, filter){
            for (let i = 0; i < amount; i++){
                var znrCards = filter[Math.floor(Math.random() * filter.length)];
                
                // Card values
                var znrCommonCardName = znrCards.name;
                var znrCommonCardRarity = znrCards.rarity;
                var znrCommonCardImg = znrCards.image_uris[0];   
    
                // Appending card images to webpage
                const cardImage = document.createElement('img');
                const packsCardsDiv = document.getElementById('packsCards');
                cardImage.src = znrCommonCardImg;
                cardImage.className = 'draftCards';
                cardImage.name = packCount;
                packsCardsDiv.append(cardImage);

                // Appending card images to selected area
                const selectedContainer = document.getElementById('selectedContainer');
                
                cardImage.onclick = () => pickCard();
                
                // Moves cards from packs div to selected div
                function pickCard() {
                    packsCardsDiv.removeChild(cardImage);    
                    selectedContainer.append(cardImage);
                    cardImage.className = 'selectedCards';
                    cardImage.name = 'selected';
                }
            }
        };
    } else; 
    // Add error handling
};
xhttp.open("GET", "/static/sets/znr.json", true);
xhttp.send();
