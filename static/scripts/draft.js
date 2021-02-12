const SET = {
    "znr": "/sets/znr.json",
    "m21": "/sets/m21.json",
    "iko": "/sets/iko.json",
    "thb": "/sets/thb.json",
    "eld": "/sets/eld.json"
};
// /static/sets/znr.json for non-handlebars

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        var mainDiv = document.getElementsByTagName('main');
        var boosterPackDivs = document.getElementsByClassName('boosterPackDiv');
        var selectedContainer = document.getElementById('selectedContainer');
        var cardContainer = document.getElementById('cardContainer');
        var cardSelectArea = document.getElementById('cardSelectArea');

        var pickAmount = document.getElementById('pick-amount');
        var pickCounter = 0;
        var packCounter = 1;

        // ---------- REFACTOR BELOW ----------
        var packDiv0 = document.getElementById('boosterPackDiv0');
        var packDiv1 = document.getElementById('boosterPackDiv1');
        var packDiv2 = document.getElementById('boosterPackDiv2');
        var packDiv3 = document.getElementById('boosterPackDiv3');
        var packDiv4 = document.getElementById('boosterPackDiv4');
        var packDiv5 = document.getElementById('boosterPackDiv5');
        var packDiv6 = document.getElementById('boosterPackDiv6');
        var packDiv7 = document.getElementById('boosterPackDiv7');
        
        var packDiv8 = document.getElementById('boosterPackDiv8');
        var packDiv9 = document.getElementById('boosterPackDiv9');
        var packDiv10 = document.getElementById('boosterPackDiv10');
        var packDiv11 = document.getElementById('boosterPackDiv11');
        var packDiv12 = document.getElementById('boosterPackDiv12');
        var packDiv13 = document.getElementById('boosterPackDiv13');
        var packDiv14 = document.getElementById('boosterPackDiv14');
        var packDiv15 = document.getElementById('boosterPackDiv15');

        var packDiv16 = document.getElementById('boosterPackDiv16');
        var packDiv17 = document.getElementById('boosterPackDiv17');
        var packDiv18 = document.getElementById('boosterPackDiv18');
        var packDiv19 = document.getElementById('boosterPackDiv19');
        var packDiv20 = document.getElementById('boosterPackDiv20');
        var packDiv21 = document.getElementById('boosterPackDiv21');
        var packDiv22 = document.getElementById('boosterPackDiv22');
        var packDiv23 = document.getElementById('boosterPackDiv23');

        var packCards0 = document.getElementsByName('0');
        var packCards1 = document.getElementsByName('1');
        var packCards2 = document.getElementsByName('2');
        var packCards3 = document.getElementsByName('3');
        var packCards4 = document.getElementsByName('4');
        var packCards5 = document.getElementsByName('5');
        var packCards6 = document.getElementsByName('6');
        var packCards7 = document.getElementsByName('7');

        var packCards8 = document.getElementsByName('8');
        var packCards9 = document.getElementsByName('9');
        var packCards10 = document.getElementsByName('10');
        var packCards11 = document.getElementsByName('11');
        var packCards12 = document.getElementsByName('12');
        var packCards13 = document.getElementsByName('13');
        var packCards14 = document.getElementsByName('14');
        var packCards15 = document.getElementsByName('15');

        var packCards16 = document.getElementsByName('16');
        var packCards17 = document.getElementsByName('17');
        var packCards18 = document.getElementsByName('18');
        var packCards19 = document.getElementsByName('19');
        var packCards20 = document.getElementsByName('20');
        var packCards21 = document.getElementsByName('21');
        var packCards22 = document.getElementsByName('22');
        var packCards23 = document.getElementsByName('23');
        // ---------- REFACTOR ABOVE ----------

        // Sets boosterPackDivs display to none
        function displayNone(){
            packDiv1.style.display = 'none';
            packDiv2.style.display = 'none';
            packDiv3.style.display = 'none';
            packDiv4.style.display = 'none';
            packDiv5.style.display = 'none';
            packDiv6.style.display = 'none';
            packDiv7.style.display = 'none';

            packDiv8.style.display = 'none';
            packDiv9.style.display = 'none';
            packDiv10.style.display = 'none';
            packDiv11.style.display = 'none';
            packDiv12.style.display = 'none';
            packDiv13.style.display = 'none';
            packDiv14.style.display = 'none';
            packDiv15.style.display = 'none';

            packDiv16.style.display = 'none';
            packDiv17.style.display = 'none';
            packDiv18.style.display = 'none';
            packDiv19.style.display = 'none';
            packDiv20.style.display = 'none';
            packDiv21.style.display = 'none';
            packDiv22.style.display = 'none';
            packDiv23.style.display = 'none';
        }

        cardContainer.onclick = () => nextPacks();

        // Shows/Hides BoosterPackDivs to simulate passing packs.
        function nextPacks(){
            var cardCounter = selectedContainer.childElementCount;

            // Fixes styling between packs 1/2/3
            if(cardCounter == 14){
                packDiv6.style.display = 'none';
                packDiv8.style.display = 'flex';
                packDiv8.style.flexWrap = 'wrap';
                packDiv8.style.justifyContent = 'center';
                packDiv8.style.position = 'relative';
            } else if(cardCounter == 28){
                packDiv14.style.display = 'none';
                packDiv16.style.display = 'flex';
                packDiv16.style.flexWrap = 'wrap';
                packDiv16.style.justifyContent = 'center';
                packDiv16.style.position = 'relative';
            } 

            // When all cards are selected...
            if(cardCounter == 42){
                packDiv22.style.display = 'none';
                
                // Creates new final div and appends it to cardContainer
                var draftedCards = document.createElement('div');
                draftedCards.id = 'draftCards';
                cardContainer.append(draftedCards);

                // Loop through selectedCards div and append them to new draftedCards div
                for(let i = 0; i < 42; i++){
                    var selectedCards = document.getElementsByClassName('selectedCards');
                    draftedCards.append(selectedCards[i]);
                }
                
                // Selects draftCards div child nodes (card images)
                var finalDraft = draftedCards.childNodes;

                selectedContainer.style.display = 'none';
                cardSelectArea.style.width = '95%';
                cardSelectArea.style.marginLeft = '35px';
                cardSelectArea.style.marginRight = '35px';

                // Changes card images to draftedCards styling
                for(let x = 0; x < 42; x++){
                    finalDraft[x].className = 'draftedCards';
                }
            }
        }

        // Set h2 element as set name
        if (response[1].set == 'znr'){
            document.getElementById('selectSet').innerHTML = 'Zendikar Rising';
        } else if (response[1].set == 'm21'){
            document.getElementById('selectSet').innerHTML = 'Core Set 2021';
        } else if (response[1].set == 'iko'){
            document.getElementById('selectSet').innerHTML = 'Ikoria: Lair of Behemoths';
        } else if (response[1].set == 'thb'){
            document.getElementById('selectSet').innerHTML = 'Theros Beyond Death';
        } else if (response[1].set == 'eld'){
            document.getElementById('selectSet').innerHTML = 'Throne of Eldraine';
        }

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
            uncommonCards();
            rareCard();
            packCount+= 1;
        };

        function draft(amount){
            for (let i = 0; i < amount; i++){
                boosterPack();
            }
            displayNone();
        };

        // Starts Draft
        draft(24);

        // Loop through set json and append to webpage
        function boosterCards(amount, filter){
            for (let i = 0; i < amount; i++){
                var jsonCards = filter[Math.floor(Math.random() * filter.length)];
                
                // Card values
                var jsonCommonCardName = jsonCards.name;
                var jsonCommonCardRarity = jsonCards.rarity;
                var jsonCommonCardImg = jsonCards.image_uris[0];   
    
                // Appending card images to webpage
                const cardImage = document.createElement('img');
                const packsCardsDiv = document.getElementById('packsCards');
                cardImage.src = jsonCommonCardImg;
                cardImage.className = 'draftCards';
                cardImage.name = packCount;

                // ---------- REFACTOR BELOW ----------
                // Appending card images to respective boosterPackDivs
                // Pack(s) 1
                if(cardImage.name == 0){
                    packDiv0.append(cardImage);
                } else if (cardImage.name == 1) {
                    packDiv1.append(cardImage);
                } else if (cardImage.name == 2) {
                    packDiv2.append(cardImage);
                } else if (cardImage.name == 3) {
                    packDiv3.append(cardImage);
                } else if (cardImage.name == 4) {
                    packDiv4.append(cardImage);
                } else if (cardImage.name == 5) {
                    packDiv5.append(cardImage);
                } else if (cardImage.name == 6) {
                    packDiv6.append(cardImage);
                } else if (cardImage.name == 7) {
                    packDiv7.append(cardImage);
                } 
                
                // Pack(s) 2
                if (cardImage.name == 8) {
                    packDiv8.append(cardImage);
                } else if (cardImage.name == 9) {
                    packDiv9.append(cardImage);
                } else if (cardImage.name == 10) {
                    packDiv10.append(cardImage);
                } else if (cardImage.name == 11) {
                    packDiv11.append(cardImage);
                } else if (cardImage.name == 12) {
                    packDiv12.append(cardImage);
                } else if (cardImage.name == 13) {
                    packDiv13.append(cardImage);
                } else if (cardImage.name == 14) {
                    packDiv14.append(cardImage);
                } else if (cardImage.name == 15) {
                    packDiv15.append(cardImage);
                } 
                
                // Pack(s) 3
                if (cardImage.name == 16) {
                    packDiv16.append(cardImage);
                } else if (cardImage.name == 17) {
                    packDiv17.append(cardImage);
                } else if (cardImage.name == 18) {
                    packDiv18.append(cardImage);
                } else if (cardImage.name == 19) {
                    packDiv19.append(cardImage);
                } else if (cardImage.name == 20) {
                    packDiv20.append(cardImage);
                } else if (cardImage.name == 21) {
                    packDiv21.append(cardImage);
                } else if (cardImage.name == 22) {
                    packDiv22.append(cardImage);
                }  else if (cardImage.name == 23) {
                    packDiv23.append(cardImage);
                }
                // ---------- REFACTOR ABOVE ----------

                // Appending card images to selected area
                
                cardImage.onclick = () => pickCard();
                
                // Moves cards from packs div to selected div
                function pickCard(){
                    if(cardImage.className == 'draftCards'){
                        // ---------- REFACTOR BELOW ----------
                        // Appending card images to selected div
                        // Pack(s) 1
                        if(cardImage.name == 0){
                            packDiv0.removeChild(cardImage);
                        } else if (cardImage.name == 1) {
                            packDiv1.removeChild(cardImage);
                        } else if (cardImage.name == 2) {
                            packDiv2.removeChild(cardImage);
                        } else if (cardImage.name == 3) {
                            packDiv3.removeChild(cardImage);
                        } else if (cardImage.name == 4) {
                            packDiv4.removeChild(cardImage);
                        } else if (cardImage.name == 5) {
                            packDiv5.removeChild(cardImage);
                        } else if (cardImage.name == 6) {
                            packDiv6.removeChild(cardImage);
                        } else if (cardImage.name == 7) {
                            packDiv7.removeChild(cardImage);
                        }

                        // Pack(s) 2
                        if(cardImage.name == 8){
                            packDiv8.removeChild(cardImage);
                        } else if (cardImage.name == 9) {
                            packDiv9.removeChild(cardImage);
                        } else if (cardImage.name == 10) {
                            packDiv10.removeChild(cardImage);
                        } else if (cardImage.name == 11) {
                            packDiv11.removeChild(cardImage);
                        } else if (cardImage.name == 12) {
                            packDiv12.removeChild(cardImage);
                        } else if (cardImage.name == 13) {
                            packDiv13.removeChild(cardImage);
                        } else if (cardImage.name == 14) {
                            packDiv14.removeChild(cardImage);
                        } else if (cardImage.name == 15) {
                            packDiv15.removeChild(cardImage);
                        }

                        // Pack(s) 3
                        if(cardImage.name == 16){
                            packDiv16.removeChild(cardImage);
                        } else if (cardImage.name == 17) {
                            packDiv17.removeChild(cardImage);
                        } else if (cardImage.name == 18) {
                            packDiv18.removeChild(cardImage);
                        } else if (cardImage.name == 19) {
                            packDiv19.removeChild(cardImage);
                        } else if (cardImage.name == 20) {
                            packDiv20.removeChild(cardImage);
                        } else if (cardImage.name == 21) {
                            packDiv21.removeChild(cardImage);
                        } else if (cardImage.name == 22) {
                            packDiv22.removeChild(cardImage);
                        } else if (cardImage.name == 23) {
                            packDiv23.removeChild(cardImage);
                        }
                        // ---------- REFACTOR ABOVE ----------

                        // ---------- REFACTOR BELOW ----------
                        // Simulates booster pack passing by displaying/showing subsequent packs && simulates "other players" choosing cards by randomly removing a card from subsequent packs
                        // Pack(s) 1
                        if(cardImage.name == 0){
                            // "Passing" packs | Styling pack divs
                            packDiv0.style.display = 'none';
                            packDiv1.style.display = 'flex';
                            packDiv1.style.flexWrap = 'wrap';
                            packDiv1.style.justifyContent = 'center';
                            packDiv1.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv1.removeChild(packCards1[randomNum(packDiv1.childElementCount)]);
                            packDiv2.removeChild(packCards2[randomNum(packDiv2.childElementCount)]);
                            packDiv3.removeChild(packCards3[randomNum(packDiv3.childElementCount)]);
                            packDiv4.removeChild(packCards4[randomNum(packDiv4.childElementCount)]);
                            packDiv5.removeChild(packCards5[randomNum(packDiv5.childElementCount)]);
                            packDiv6.removeChild(packCards6[randomNum(packDiv6.childElementCount)]);
                            packDiv7.removeChild(packCards7[randomNum(packDiv7.childElementCount)]);

                        } else if(cardImage.name == 1){
                            // "Passing" packs | Styling pack divs
                            packDiv1.style.display = 'none';
                            packDiv2.style.display = 'flex';
                            packDiv2.style.flexWrap = 'wrap';
                            packDiv2.style.justifyContent = 'center';
                            packDiv2.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv0.removeChild(packCards0[randomNum(packDiv0.childElementCount)]);
                            packDiv2.removeChild(packCards2[randomNum(packDiv2.childElementCount)]);
                            packDiv3.removeChild(packCards3[randomNum(packDiv3.childElementCount)]);
                            packDiv4.removeChild(packCards4[randomNum(packDiv4.childElementCount)]);
                            packDiv5.removeChild(packCards5[randomNum(packDiv5.childElementCount)]);
                            packDiv6.removeChild(packCards6[randomNum(packDiv6.childElementCount)]);
                            packDiv7.removeChild(packCards7[randomNum(packDiv7.childElementCount)]);

                        } else if(cardImage.name == 2){
                            // "Passing" packs | Styling pack divs
                            packDiv2.style.display = 'none';
                            packDiv3.style.display = 'flex';
                            packDiv3.style.flexWrap = 'wrap';
                            packDiv3.style.justifyContent = 'center';
                            packDiv3.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv0.removeChild(packCards0[randomNum(packDiv0.childElementCount)]);
                            packDiv1.removeChild(packCards1[randomNum(packDiv1.childElementCount)]);
                            packDiv3.removeChild(packCards3[randomNum(packDiv3.childElementCount)]);
                            packDiv4.removeChild(packCards4[randomNum(packDiv4.childElementCount)]);
                            packDiv5.removeChild(packCards5[randomNum(packDiv5.childElementCount)]);
                            packDiv6.removeChild(packCards6[randomNum(packDiv6.childElementCount)]);
                            packDiv7.removeChild(packCards7[randomNum(packDiv7.childElementCount)]);    

                        } else if(cardImage.name == 3){
                            // "Passing" packs | Styling pack divs
                            packDiv3.style.display = 'none';
                            packDiv4.style.display = 'flex';
                            packDiv4.style.flexWrap = 'wrap';
                            packDiv4.style.justifyContent = 'center';
                            packDiv4.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv0.removeChild(packCards0[randomNum(packDiv0.childElementCount)]);
                            packDiv1.removeChild(packCards1[randomNum(packDiv1.childElementCount)]);
                            packDiv2.removeChild(packCards2[randomNum(packDiv2.childElementCount)]);
                            packDiv4.removeChild(packCards4[randomNum(packDiv4.childElementCount)]);
                            packDiv5.removeChild(packCards5[randomNum(packDiv5.childElementCount)]);
                            packDiv6.removeChild(packCards6[randomNum(packDiv6.childElementCount)]);
                            packDiv7.removeChild(packCards7[randomNum(packDiv7.childElementCount)]);

                        } else if(cardImage.name == 4){
                            // "Passing" packs | Styling pack divs
                            packDiv4.style.display = 'none';
                            packDiv5.style.display = 'flex';
                            packDiv5.style.flexWrap = 'wrap';
                            packDiv5.style.justifyContent = 'center';
                            packDiv5.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv0.removeChild(packCards0[randomNum(packDiv0.childElementCount)]);
                            packDiv1.removeChild(packCards1[randomNum(packDiv1.childElementCount)]);
                            packDiv2.removeChild(packCards2[randomNum(packDiv2.childElementCount)]);
                            packDiv3.removeChild(packCards3[randomNum(packDiv3.childElementCount)]);
                            packDiv5.removeChild(packCards5[randomNum(packDiv5.childElementCount)]);
                            packDiv6.removeChild(packCards6[randomNum(packDiv6.childElementCount)]);
                            packDiv7.removeChild(packCards7[randomNum(packDiv7.childElementCount)]);

                        } else if(cardImage.name == 5){
                            // "Passing" packs | Styling pack divs
                            packDiv5.style.display = 'none';
                            packDiv6.style.display = 'flex';
                            packDiv6.style.flexWrap = 'wrap';
                            packDiv6.style.justifyContent = 'center';
                            packDiv6.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv0.removeChild(packCards0[randomNum(packDiv0.childElementCount)]);
                            packDiv1.removeChild(packCards1[randomNum(packDiv1.childElementCount)]);
                            packDiv2.removeChild(packCards2[randomNum(packDiv2.childElementCount)]);
                            packDiv3.removeChild(packCards3[randomNum(packDiv3.childElementCount)]);
                            packDiv4.removeChild(packCards4[randomNum(packDiv4.childElementCount)]);
                            packDiv6.removeChild(packCards6[randomNum(packDiv6.childElementCount)]);
                            packDiv7.removeChild(packCards7[randomNum(packDiv7.childElementCount)]);

                        } else if(cardImage.name == 6){
                            // "Passing" packs | Styling pack divs
                            packDiv6.style.display = 'none';
                            packDiv7.style.display = 'flex';
                            packDiv7.style.flexWrap = 'wrap';
                            packDiv7.style.justifyContent = 'center';
                            packDiv7.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv0.removeChild(packCards0[randomNum(packDiv0.childElementCount)]);
                            packDiv1.removeChild(packCards1[randomNum(packDiv1.childElementCount)]);
                            packDiv2.removeChild(packCards2[randomNum(packDiv2.childElementCount)]);
                            packDiv3.removeChild(packCards3[randomNum(packDiv3.childElementCount)]);
                            packDiv4.removeChild(packCards4[randomNum(packDiv4.childElementCount)]);
                            packDiv5.removeChild(packCards5[randomNum(packDiv5.childElementCount)]);
                            packDiv7.removeChild(packCards7[randomNum(packDiv7.childElementCount)]);

                        } else if(cardImage.name == 7){
                            // "Passing" packs | Styling pack divs
                            packDiv7.style.display = 'none';
                            packDiv0.style.display = 'flex';
                            packDiv0.style.flexWrap = 'wrap';
                            packDiv0.style.justifyContent = 'center';
                            packDiv0.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv0.removeChild(packCards0[randomNum(packDiv0.childElementCount)]);
                            packDiv1.removeChild(packCards1[randomNum(packDiv1.childElementCount)]);
                            packDiv2.removeChild(packCards2[randomNum(packDiv2.childElementCount)]);
                            packDiv3.removeChild(packCards3[randomNum(packDiv3.childElementCount)]);
                            packDiv4.removeChild(packCards4[randomNum(packDiv4.childElementCount)]);
                            packDiv5.removeChild(packCards5[randomNum(packDiv5.childElementCount)]);
                            packDiv6.removeChild(packCards6[randomNum(packDiv6.childElementCount)]);
                        }
                        
                        // Pack(s) 2
                        if(cardImage.name == 8){
                            // "Passing" packs | Styling pack divs
                            packDiv8.style.display = 'none';
                            packDiv9.style.display = 'flex';
                            packDiv9.style.flexWrap = 'wrap';
                            packDiv9.style.justifyContent = 'center';
                            packDiv9.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv9.removeChild(packCards9[randomNum(packDiv9.childElementCount)]);
                            packDiv10.removeChild(packCards10[randomNum(packDiv10.childElementCount)]);
                            packDiv11.removeChild(packCards11[randomNum(packDiv11.childElementCount)]);
                            packDiv12.removeChild(packCards12[randomNum(packDiv12.childElementCount)]);
                            packDiv13.removeChild(packCards13[randomNum(packDiv13.childElementCount)]);
                            packDiv14.removeChild(packCards14[randomNum(packDiv14.childElementCount)]);
                            packDiv15.removeChild(packCards15[randomNum(packDiv15.childElementCount)]);

                        } else if(cardImage.name == 9){
                            // "Passing" packs | Styling pack divs
                            packDiv9.style.display = 'none';
                            packDiv10.style.display = 'flex';
                            packDiv10.style.flexWrap = 'wrap';
                            packDiv10.style.justifyContent = 'center';
                            packDiv10.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv8.removeChild(packCards8[randomNum(packDiv8.childElementCount)]);
                            packDiv10.removeChild(packCards10[randomNum(packDiv10.childElementCount)]);
                            packDiv11.removeChild(packCards11[randomNum(packDiv11.childElementCount)]);
                            packDiv12.removeChild(packCards12[randomNum(packDiv12.childElementCount)]);
                            packDiv13.removeChild(packCards13[randomNum(packDiv13.childElementCount)]);
                            packDiv14.removeChild(packCards14[randomNum(packDiv14.childElementCount)]);
                            packDiv15.removeChild(packCards15[randomNum(packDiv15.childElementCount)]);

                        } else if(cardImage.name == 10){
                            // "Passing" packs | Styling pack divs
                            packDiv10.style.display = 'none';
                            packDiv11.style.display = 'flex';
                            packDiv11.style.flexWrap = 'wrap';
                            packDiv11.style.justifyContent = 'center';
                            packDiv11.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv8.removeChild(packCards8[randomNum(packDiv8.childElementCount)]);
                            packDiv9.removeChild(packCards9[randomNum(packDiv9.childElementCount)]);
                            packDiv11.removeChild(packCards11[randomNum(packDiv11.childElementCount)]);
                            packDiv12.removeChild(packCards12[randomNum(packDiv12.childElementCount)]);
                            packDiv13.removeChild(packCards13[randomNum(packDiv13.childElementCount)]);
                            packDiv14.removeChild(packCards14[randomNum(packDiv14.childElementCount)]);
                            packDiv15.removeChild(packCards15[randomNum(packDiv15.childElementCount)]);   

                        } else if(cardImage.name == 11){
                            // "Passing" packs | Styling pack divs
                            packDiv11.style.display = 'none';
                            packDiv12.style.display = 'flex';
                            packDiv12.style.flexWrap = 'wrap';
                            packDiv12.style.justifyContent = 'center';
                            packDiv12.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv8.removeChild(packCards8[randomNum(packDiv8.childElementCount)]);
                            packDiv9.removeChild(packCards9[randomNum(packDiv9.childElementCount)]);
                            packDiv10.removeChild(packCards10[randomNum(packDiv10.childElementCount)]);
                            packDiv12.removeChild(packCards12[randomNum(packDiv12.childElementCount)]);
                            packDiv13.removeChild(packCards13[randomNum(packDiv13.childElementCount)]);
                            packDiv14.removeChild(packCards14[randomNum(packDiv14.childElementCount)]);
                            packDiv15.removeChild(packCards15[randomNum(packDiv15.childElementCount)]);

                        } else if(cardImage.name == 12){
                            // "Passing" packs | Styling pack divs
                            packDiv12.style.display = 'none';
                            packDiv13.style.display = 'flex';
                            packDiv13.style.flexWrap = 'wrap';
                            packDiv13.style.justifyContent = 'center';
                            packDiv13.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv8.removeChild(packCards8[randomNum(packDiv8.childElementCount)]);
                            packDiv9.removeChild(packCards9[randomNum(packDiv9.childElementCount)]);
                            packDiv10.removeChild(packCards10[randomNum(packDiv10.childElementCount)]);
                            packDiv11.removeChild(packCards11[randomNum(packDiv11.childElementCount)]);
                            packDiv13.removeChild(packCards13[randomNum(packDiv13.childElementCount)]);
                            packDiv14.removeChild(packCards14[randomNum(packDiv14.childElementCount)]);
                            packDiv15.removeChild(packCards15[randomNum(packDiv15.childElementCount)]);

                        } else if(cardImage.name == 13){
                            // "Passing" packs | Styling pack divs
                            packDiv13.style.display = 'none';
                            packDiv14.style.display = 'flex';
                            packDiv14.style.flexWrap = 'wrap';
                            packDiv14.style.justifyContent = 'center';
                            packDiv14.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv8.removeChild(packCards8[randomNum(packDiv8.childElementCount)]);
                            packDiv9.removeChild(packCards9[randomNum(packDiv9.childElementCount)]);
                            packDiv10.removeChild(packCards10[randomNum(packDiv10.childElementCount)]);
                            packDiv11.removeChild(packCards11[randomNum(packDiv11.childElementCount)]);
                            packDiv12.removeChild(packCards12[randomNum(packDiv12.childElementCount)]);
                            packDiv14.removeChild(packCards14[randomNum(packDiv14.childElementCount)]);
                            packDiv15.removeChild(packCards15[randomNum(packDiv15.childElementCount)]);

                        } else if(cardImage.name == 14){
                            // "Passing" packs | Styling pack divs
                            packDiv14.style.display = 'none';
                            packDiv15.style.display = 'flex';
                            packDiv15.style.flexWrap = 'wrap';
                            packDiv15.style.justifyContent = 'center';
                            packDiv15.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv8.removeChild(packCards8[randomNum(packDiv8.childElementCount)]);
                            packDiv9.removeChild(packCards9[randomNum(packDiv9.childElementCount)]);
                            packDiv10.removeChild(packCards10[randomNum(packDiv10.childElementCount)]);
                            packDiv11.removeChild(packCards11[randomNum(packDiv11.childElementCount)]);
                            packDiv12.removeChild(packCards12[randomNum(packDiv12.childElementCount)]);
                            packDiv13.removeChild(packCards13[randomNum(packDiv13.childElementCount)]);
                            packDiv15.removeChild(packCards15[randomNum(packDiv15.childElementCount)]);

                        } else if(cardImage.name == 15){
                            // "Passing" packs | Styling pack divs
                            packDiv15.style.display = 'none';
                            packDiv8.style.display = 'flex';
                            packDiv8.style.flexWrap = 'wrap';
                            packDiv8.style.justifyContent = 'center';
                            packDiv8.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv8.removeChild(packCards8[randomNum(packDiv8.childElementCount)]);
                            packDiv9.removeChild(packCards9[randomNum(packDiv9.childElementCount)]);
                            packDiv10.removeChild(packCards10[randomNum(packDiv10.childElementCount)]);
                            packDiv11.removeChild(packCards11[randomNum(packDiv11.childElementCount)]);
                            packDiv12.removeChild(packCards12[randomNum(packDiv12.childElementCount)]);
                            packDiv13.removeChild(packCards13[randomNum(packDiv13.childElementCount)]);
                            packDiv14.removeChild(packCards14[randomNum(packDiv14.childElementCount)]);
                        }

                        // Pack(s) 3
                        if(cardImage.name == 16){
                            // "Passing" packs | Styling pack divs
                            packDiv16.style.display = 'none';
                            packDiv17.style.display = 'flex';
                            packDiv17.style.flexWrap = 'wrap';
                            packDiv17.style.justifyContent = 'center';
                            packDiv17.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv17.removeChild(packCards17[randomNum(packDiv17.childElementCount)]);
                            packDiv18.removeChild(packCards18[randomNum(packDiv18.childElementCount)]);
                            packDiv19.removeChild(packCards19[randomNum(packDiv19.childElementCount)]);
                            packDiv20.removeChild(packCards20[randomNum(packDiv20.childElementCount)]);
                            packDiv21.removeChild(packCards21[randomNum(packDiv21.childElementCount)]);
                            packDiv22.removeChild(packCards22[randomNum(packDiv22.childElementCount)]);
                            packDiv23.removeChild(packCards23[randomNum(packDiv23.childElementCount)]);

                        } else if(cardImage.name == 17){
                            // "Passing" packs | Styling pack divs
                            packDiv17.style.display = 'none';
                            packDiv18.style.display = 'flex';
                            packDiv18.style.flexWrap = 'wrap';
                            packDiv18.style.justifyContent = 'center';
                            packDiv18.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv16.removeChild(packCards16[randomNum(packDiv16.childElementCount)]);
                            packDiv18.removeChild(packCards18[randomNum(packDiv18.childElementCount)]);
                            packDiv19.removeChild(packCards19[randomNum(packDiv19.childElementCount)]);
                            packDiv20.removeChild(packCards20[randomNum(packDiv20.childElementCount)]);
                            packDiv21.removeChild(packCards21[randomNum(packDiv21.childElementCount)]);
                            packDiv22.removeChild(packCards22[randomNum(packDiv22.childElementCount)]);
                            packDiv23.removeChild(packCards23[randomNum(packDiv23.childElementCount)]);

                        } else if(cardImage.name == 18){
                            // "Passing" packs | Styling pack divs
                            packDiv18.style.display = 'none';
                            packDiv19.style.display = 'flex';
                            packDiv19.style.flexWrap = 'wrap';
                            packDiv19.style.justifyContent = 'center';
                            packDiv19.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv16.removeChild(packCards16[randomNum(packDiv16.childElementCount)]);
                            packDiv17.removeChild(packCards17[randomNum(packDiv17.childElementCount)]);
                            packDiv19.removeChild(packCards19[randomNum(packDiv19.childElementCount)]);
                            packDiv20.removeChild(packCards20[randomNum(packDiv20.childElementCount)]);
                            packDiv21.removeChild(packCards21[randomNum(packDiv21.childElementCount)]);
                            packDiv22.removeChild(packCards22[randomNum(packDiv22.childElementCount)]);
                            packDiv23.removeChild(packCards23[randomNum(packDiv23.childElementCount)]);

                        } else if(cardImage.name == 19){
                            // "Passing" packs | Styling pack divs
                            packDiv19.style.display = 'none';
                            packDiv20.style.display = 'flex';
                            packDiv20.style.flexWrap = 'wrap';
                            packDiv20.style.justifyContent = 'center';
                            packDiv20.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv16.removeChild(packCards16[randomNum(packDiv16.childElementCount)]);
                            packDiv17.removeChild(packCards17[randomNum(packDiv17.childElementCount)]);
                            packDiv18.removeChild(packCards18[randomNum(packDiv18.childElementCount)]);
                            packDiv20.removeChild(packCards20[randomNum(packDiv20.childElementCount)]);
                            packDiv21.removeChild(packCards21[randomNum(packDiv21.childElementCount)]);
                            packDiv22.removeChild(packCards22[randomNum(packDiv22.childElementCount)]);
                            packDiv23.removeChild(packCards23[randomNum(packDiv23.childElementCount)]);

                        } else if(cardImage.name == 20){
                            // "Passing" packs | Styling pack divs
                            packDiv20.style.display = 'none';
                            packDiv21.style.display = 'flex';
                            packDiv21.style.flexWrap = 'wrap';
                            packDiv21.style.justifyContent = 'center';
                            packDiv21.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv16.removeChild(packCards16[randomNum(packDiv16.childElementCount)]);
                            packDiv17.removeChild(packCards17[randomNum(packDiv17.childElementCount)]);
                            packDiv18.removeChild(packCards18[randomNum(packDiv18.childElementCount)]);
                            packDiv19.removeChild(packCards19[randomNum(packDiv19.childElementCount)]);
                            packDiv21.removeChild(packCards21[randomNum(packDiv21.childElementCount)]);
                            packDiv22.removeChild(packCards22[randomNum(packDiv22.childElementCount)]);
                            packDiv23.removeChild(packCards23[randomNum(packDiv23.childElementCount)]);

                        } else if(cardImage.name == 21){
                            // "Passing" packs | Styling pack divs
                            packDiv21.style.display = 'none';
                            packDiv22.style.display = 'flex';
                            packDiv22.style.flexWrap = 'wrap';
                            packDiv22.style.justifyContent = 'center';
                            packDiv22.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv16.removeChild(packCards16[randomNum(packDiv16.childElementCount)]);
                            packDiv17.removeChild(packCards17[randomNum(packDiv17.childElementCount)]);
                            packDiv18.removeChild(packCards18[randomNum(packDiv18.childElementCount)]);
                            packDiv19.removeChild(packCards19[randomNum(packDiv19.childElementCount)]);
                            packDiv20.removeChild(packCards20[randomNum(packDiv20.childElementCount)]);
                            packDiv22.removeChild(packCards22[randomNum(packDiv22.childElementCount)]);
                            packDiv23.removeChild(packCards23[randomNum(packDiv23.childElementCount)]);

                        } else if(cardImage.name == 22){
                            // "Passing" packs | Styling pack divs
                            packDiv22.style.display = 'none';
                            packDiv23.style.display = 'flex';
                            packDiv23.style.flexWrap = 'wrap';
                            packDiv23.style.justifyContent = 'center';
                            packDiv23.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv16.removeChild(packCards16[randomNum(packDiv16.childElementCount)]);
                            packDiv17.removeChild(packCards17[randomNum(packDiv17.childElementCount)]);
                            packDiv18.removeChild(packCards18[randomNum(packDiv18.childElementCount)]);
                            packDiv19.removeChild(packCards19[randomNum(packDiv19.childElementCount)]);
                            packDiv20.removeChild(packCards20[randomNum(packDiv20.childElementCount)]);
                            packDiv21.removeChild(packCards21[randomNum(packDiv21.childElementCount)]);
                            packDiv23.removeChild(packCards23[randomNum(packDiv23.childElementCount)]);

                        } else if(cardImage.name == 23){
                            // "Passing" packs | Styling pack divs
                            packDiv23.style.display = 'none';
                            packDiv16.style.display = 'flex';
                            packDiv16.style.flexWrap = 'wrap';
                            packDiv16.style.justifyContent = 'center';
                            packDiv16.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            packDiv16.removeChild(packCards16[randomNum(packDiv16.childElementCount)]);
                            packDiv17.removeChild(packCards17[randomNum(packDiv17.childElementCount)]);
                            packDiv18.removeChild(packCards18[randomNum(packDiv18.childElementCount)]);
                            packDiv19.removeChild(packCards19[randomNum(packDiv19.childElementCount)]);
                            packDiv20.removeChild(packCards20[randomNum(packDiv20.childElementCount)]);
                            packDiv21.removeChild(packCards21[randomNum(packDiv21.childElementCount)]);
                            packDiv22.removeChild(packCards22[randomNum(packDiv22.childElementCount)]);
                        }

                        // ---------- REFACTOR ABOVE ----------

                        selectedContainer.append(cardImage);
                        cardImage.className = 'selectedCards';
                        cardImage.name = 'selected';

                        // Increments packCounter, and adds card amount picked, and pack number to DOM
                        pickCounter++;
                        pickAmount.innerHTML = `Pack: ${packCounter} | Drafted: ${pickCounter}`;

                        if(pickCounter == 13){
                            packCounter++;
                        } else if(pickCounter == 27){
                            packCounter++;
                        } else if(pickCounter == 42){
                            pickAmount.innerHTML = 'Thanks for drafting!';
                        }
                    }       
                }
            }
        }

        function randomNum(count){
            return Math.floor(Math.random() * Math.floor(count));
        }
        
    } else; 
    // Add error handling
}
xhttp.open("GET", SET.znr, true);
xhttp.send();

// set draft title in app.js. if(draft title = draft){SET = that set's json} else if{etc}