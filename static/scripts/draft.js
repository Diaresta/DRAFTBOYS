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
        var testDiv0 = document.getElementById('boosterPackDiv0');
        var testDiv1 = document.getElementById('boosterPackDiv1');
        var testDiv2 = document.getElementById('boosterPackDiv2');
        var testDiv3 = document.getElementById('boosterPackDiv3');
        var testDiv4 = document.getElementById('boosterPackDiv4');
        var testDiv5 = document.getElementById('boosterPackDiv5');
        var testDiv6 = document.getElementById('boosterPackDiv6');
        var testDiv7 = document.getElementById('boosterPackDiv7');
        
        var testDiv8 = document.getElementById('boosterPackDiv8');
        var testDiv9 = document.getElementById('boosterPackDiv9');
        var testDiv10 = document.getElementById('boosterPackDiv10');
        var testDiv11 = document.getElementById('boosterPackDiv11');
        var testDiv12 = document.getElementById('boosterPackDiv12');
        var testDiv13 = document.getElementById('boosterPackDiv13');
        var testDiv14 = document.getElementById('boosterPackDiv14');
        var testDiv15 = document.getElementById('boosterPackDiv15');

        var testDiv16 = document.getElementById('boosterPackDiv16');
        var testDiv17 = document.getElementById('boosterPackDiv17');
        var testDiv18 = document.getElementById('boosterPackDiv18');
        var testDiv19 = document.getElementById('boosterPackDiv19');
        var testDiv20 = document.getElementById('boosterPackDiv20');
        var testDiv21 = document.getElementById('boosterPackDiv21');
        var testDiv22 = document.getElementById('boosterPackDiv22');
        var testDiv23 = document.getElementById('boosterPackDiv23');

        var testCards0 = document.getElementsByName('0');
        var testCards1 = document.getElementsByName('1');
        var testCards2 = document.getElementsByName('2');
        var testCards3 = document.getElementsByName('3');
        var testCards4 = document.getElementsByName('4');
        var testCards5 = document.getElementsByName('5');
        var testCards6 = document.getElementsByName('6');
        var testCards7 = document.getElementsByName('7');

        var testCards8 = document.getElementsByName('8');
        var testCards9 = document.getElementsByName('9');
        var testCards10 = document.getElementsByName('10');
        var testCards11 = document.getElementsByName('11');
        var testCards12 = document.getElementsByName('12');
        var testCards13 = document.getElementsByName('13');
        var testCards14 = document.getElementsByName('14');
        var testCards15 = document.getElementsByName('15');

        var testCards16 = document.getElementsByName('16');
        var testCards17 = document.getElementsByName('17');
        var testCards18 = document.getElementsByName('18');
        var testCards19 = document.getElementsByName('19');
        var testCards20 = document.getElementsByName('20');
        var testCards21 = document.getElementsByName('21');
        var testCards22 = document.getElementsByName('22');
        var testCards23 = document.getElementsByName('23');
        // ---------- REFACTOR ABOVE ----------

        // Sets boosterPackDivs display to none
        function displayNone(){
            testDiv1.style.display = 'none';
            testDiv2.style.display = 'none';
            testDiv3.style.display = 'none';
            testDiv4.style.display = 'none';
            testDiv5.style.display = 'none';
            testDiv6.style.display = 'none';
            testDiv7.style.display = 'none';

            testDiv8.style.display = 'none';
            testDiv9.style.display = 'none';
            testDiv10.style.display = 'none';
            testDiv11.style.display = 'none';
            testDiv12.style.display = 'none';
            testDiv13.style.display = 'none';
            testDiv14.style.display = 'none';
            testDiv15.style.display = 'none';

            testDiv16.style.display = 'none';
            testDiv17.style.display = 'none';
            testDiv18.style.display = 'none';
            testDiv19.style.display = 'none';
            testDiv20.style.display = 'none';
            testDiv21.style.display = 'none';
            testDiv22.style.display = 'none';
            testDiv23.style.display = 'none';
        }

        cardContainer.onclick = () => nextPacks();

        // Shows/Hides BoosterPackDivs to simulate passing packs.
        function nextPacks(){
            var cardCounter = selectedContainer.childElementCount;

            // Fixes styling between packs 1/2/3
            if(cardCounter == 14){
                testDiv6.style.display = 'none';
                testDiv8.style.display = 'flex';
                testDiv8.style.flexWrap = 'wrap';
                testDiv8.style.justifyContent = 'center';
                testDiv8.style.position = 'relative';
            } else if(cardCounter == 28){
                testDiv14.style.display = 'none';
                testDiv16.style.display = 'flex';
                testDiv16.style.flexWrap = 'wrap';
                testDiv16.style.justifyContent = 'center';
                testDiv16.style.position = 'relative';
            } 

            // When all cards are selected...
            if(cardCounter == 42){
                testDiv22.style.display = 'none';
                
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

                // ---------- REFACTOR BELOW ----------
                // Appending card images to respective boosterPackDivs
                // Pack(s) 1
                if(cardImage.name == 0){
                    testDiv0.append(cardImage);
                } else if (cardImage.name == 1) {
                    testDiv1.append(cardImage);
                } else if (cardImage.name == 2) {
                    testDiv2.append(cardImage);
                } else if (cardImage.name == 3) {
                    testDiv3.append(cardImage);
                } else if (cardImage.name == 4) {
                    testDiv4.append(cardImage);
                } else if (cardImage.name == 5) {
                    testDiv5.append(cardImage);
                } else if (cardImage.name == 6) {
                    testDiv6.append(cardImage);
                } else if (cardImage.name == 7) {
                    testDiv7.append(cardImage);
                } 
                
                // Pack(s) 2
                if (cardImage.name == 8) {
                    testDiv8.append(cardImage);
                } else if (cardImage.name == 9) {
                    testDiv9.append(cardImage);
                } else if (cardImage.name == 10) {
                    testDiv10.append(cardImage);
                } else if (cardImage.name == 11) {
                    testDiv11.append(cardImage);
                } else if (cardImage.name == 12) {
                    testDiv12.append(cardImage);
                } else if (cardImage.name == 13) {
                    testDiv13.append(cardImage);
                } else if (cardImage.name == 14) {
                    testDiv14.append(cardImage);
                } else if (cardImage.name == 15) {
                    testDiv15.append(cardImage);
                } 
                
                // Pack(s) 3
                if (cardImage.name == 16) {
                    testDiv16.append(cardImage);
                } else if (cardImage.name == 17) {
                    testDiv17.append(cardImage);
                } else if (cardImage.name == 18) {
                    testDiv18.append(cardImage);
                } else if (cardImage.name == 19) {
                    testDiv19.append(cardImage);
                } else if (cardImage.name == 20) {
                    testDiv20.append(cardImage);
                } else if (cardImage.name == 21) {
                    testDiv21.append(cardImage);
                } else if (cardImage.name == 22) {
                    testDiv22.append(cardImage);
                }  else if (cardImage.name == 23) {
                    testDiv23.append(cardImage);
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
                            testDiv0.removeChild(cardImage);
                        } else if (cardImage.name == 1) {
                            testDiv1.removeChild(cardImage);
                        } else if (cardImage.name == 2) {
                            testDiv2.removeChild(cardImage);
                        } else if (cardImage.name == 3) {
                            testDiv3.removeChild(cardImage);
                        } else if (cardImage.name == 4) {
                            testDiv4.removeChild(cardImage);
                        } else if (cardImage.name == 5) {
                            testDiv5.removeChild(cardImage);
                        } else if (cardImage.name == 6) {
                            testDiv6.removeChild(cardImage);
                        } else if (cardImage.name == 7) {
                            testDiv7.removeChild(cardImage);
                        }

                        // Pack(s) 2
                        if(cardImage.name == 8){
                            testDiv8.removeChild(cardImage);
                        } else if (cardImage.name == 9) {
                            testDiv9.removeChild(cardImage);
                        } else if (cardImage.name == 10) {
                            testDiv10.removeChild(cardImage);
                        } else if (cardImage.name == 11) {
                            testDiv11.removeChild(cardImage);
                        } else if (cardImage.name == 12) {
                            testDiv12.removeChild(cardImage);
                        } else if (cardImage.name == 13) {
                            testDiv13.removeChild(cardImage);
                        } else if (cardImage.name == 14) {
                            testDiv14.removeChild(cardImage);
                        } else if (cardImage.name == 15) {
                            testDiv15.removeChild(cardImage);
                        }

                        // Pack(s) 3
                        if(cardImage.name == 16){
                            testDiv16.removeChild(cardImage);
                        } else if (cardImage.name == 17) {
                            testDiv17.removeChild(cardImage);
                        } else if (cardImage.name == 18) {
                            testDiv18.removeChild(cardImage);
                        } else if (cardImage.name == 19) {
                            testDiv19.removeChild(cardImage);
                        } else if (cardImage.name == 20) {
                            testDiv20.removeChild(cardImage);
                        } else if (cardImage.name == 21) {
                            testDiv21.removeChild(cardImage);
                        } else if (cardImage.name == 22) {
                            testDiv22.removeChild(cardImage);
                        } else if (cardImage.name == 23) {
                            testDiv23.removeChild(cardImage);
                        }
                        // ---------- REFACTOR ABOVE ----------

                        // ---------- REFACTOR BELOW ----------
                        // Simulates booster pack passing by displaying/showing subsequent packs && simulates "other players" choosing cards by randomly removing a card from subsequent packs
                        // Pack(s) 1
                        if(cardImage.name == 0){
                            // "Passing" packs | Styling pack divs
                            testDiv0.style.display = 'none';
                            testDiv1.style.display = 'flex';
                            testDiv1.style.flexWrap = 'wrap';
                            testDiv1.style.justifyContent = 'center';
                            testDiv1.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.childElementCount)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.childElementCount)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.childElementCount)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.childElementCount)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.childElementCount)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.childElementCount)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.childElementCount)]);

                        } else if(cardImage.name == 1){
                            // "Passing" packs | Styling pack divs
                            testDiv1.style.display = 'none';
                            testDiv2.style.display = 'flex';
                            testDiv2.style.flexWrap = 'wrap';
                            testDiv2.style.justifyContent = 'center';
                            testDiv2.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv0.removeChild(testCards0[randomNum(testDiv0.childElementCount)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.childElementCount)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.childElementCount)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.childElementCount)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.childElementCount)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.childElementCount)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.childElementCount)]);

                        } else if(cardImage.name == 2){
                            // "Passing" packs | Styling pack divs
                            testDiv2.style.display = 'none';
                            testDiv3.style.display = 'flex';
                            testDiv3.style.flexWrap = 'wrap';
                            testDiv3.style.justifyContent = 'center';
                            testDiv3.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv0.removeChild(testCards0[randomNum(testDiv0.childElementCount)]);
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.childElementCount)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.childElementCount)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.childElementCount)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.childElementCount)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.childElementCount)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.childElementCount)]);    

                        } else if(cardImage.name == 3){
                            // "Passing" packs | Styling pack divs
                            testDiv3.style.display = 'none';
                            testDiv4.style.display = 'flex';
                            testDiv4.style.flexWrap = 'wrap';
                            testDiv4.style.justifyContent = 'center';
                            testDiv4.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv0.removeChild(testCards0[randomNum(testDiv0.childElementCount)]);
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.childElementCount)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.childElementCount)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.childElementCount)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.childElementCount)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.childElementCount)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.childElementCount)]);

                        } else if(cardImage.name == 4){
                            // "Passing" packs | Styling pack divs
                            testDiv4.style.display = 'none';
                            testDiv5.style.display = 'flex';
                            testDiv5.style.flexWrap = 'wrap';
                            testDiv5.style.justifyContent = 'center';
                            testDiv5.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv0.removeChild(testCards0[randomNum(testDiv0.childElementCount)]);
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.childElementCount)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.childElementCount)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.childElementCount)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.childElementCount)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.childElementCount)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.childElementCount)]);

                        } else if(cardImage.name == 5){
                            // "Passing" packs | Styling pack divs
                            testDiv5.style.display = 'none';
                            testDiv6.style.display = 'flex';
                            testDiv6.style.flexWrap = 'wrap';
                            testDiv6.style.justifyContent = 'center';
                            testDiv6.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv0.removeChild(testCards0[randomNum(testDiv0.childElementCount)]);
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.childElementCount)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.childElementCount)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.childElementCount)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.childElementCount)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.childElementCount)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.childElementCount)]);

                        } else if(cardImage.name == 6){
                            // "Passing" packs | Styling pack divs
                            testDiv6.style.display = 'none';
                            testDiv7.style.display = 'flex';
                            testDiv7.style.flexWrap = 'wrap';
                            testDiv7.style.justifyContent = 'center';
                            testDiv7.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv0.removeChild(testCards0[randomNum(testDiv0.childElementCount)]);
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.childElementCount)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.childElementCount)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.childElementCount)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.childElementCount)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.childElementCount)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.childElementCount)]);

                        } else if(cardImage.name == 7){
                            // "Passing" packs | Styling pack divs
                            testDiv7.style.display = 'none';
                            testDiv0.style.display = 'flex';
                            testDiv0.style.flexWrap = 'wrap';
                            testDiv0.style.justifyContent = 'center';
                            testDiv0.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv0.removeChild(testCards0[randomNum(testDiv0.childElementCount)]);
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.childElementCount)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.childElementCount)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.childElementCount)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.childElementCount)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.childElementCount)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.childElementCount)]);
                        }
                        
                        // Pack(s) 2
                        if(cardImage.name == 8){
                            // "Passing" packs | Styling pack divs
                            testDiv8.style.display = 'none';
                            testDiv9.style.display = 'flex';
                            testDiv9.style.flexWrap = 'wrap';
                            testDiv9.style.justifyContent = 'center';
                            testDiv9.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv9.removeChild(testCards9[randomNum(testDiv9.childElementCount)]);
                            testDiv10.removeChild(testCards10[randomNum(testDiv10.childElementCount)]);
                            testDiv11.removeChild(testCards11[randomNum(testDiv11.childElementCount)]);
                            testDiv12.removeChild(testCards12[randomNum(testDiv12.childElementCount)]);
                            testDiv13.removeChild(testCards13[randomNum(testDiv13.childElementCount)]);
                            testDiv14.removeChild(testCards14[randomNum(testDiv14.childElementCount)]);
                            testDiv15.removeChild(testCards15[randomNum(testDiv15.childElementCount)]);

                        } else if(cardImage.name == 9){
                            // "Passing" packs | Styling pack divs
                            testDiv9.style.display = 'none';
                            testDiv10.style.display = 'flex';
                            testDiv10.style.flexWrap = 'wrap';
                            testDiv10.style.justifyContent = 'center';
                            testDiv10.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv8.removeChild(testCards8[randomNum(testDiv8.childElementCount)]);
                            testDiv10.removeChild(testCards10[randomNum(testDiv10.childElementCount)]);
                            testDiv11.removeChild(testCards11[randomNum(testDiv11.childElementCount)]);
                            testDiv12.removeChild(testCards12[randomNum(testDiv12.childElementCount)]);
                            testDiv13.removeChild(testCards13[randomNum(testDiv13.childElementCount)]);
                            testDiv14.removeChild(testCards14[randomNum(testDiv14.childElementCount)]);
                            testDiv15.removeChild(testCards15[randomNum(testDiv15.childElementCount)]);

                        } else if(cardImage.name == 10){
                            // "Passing" packs | Styling pack divs
                            testDiv10.style.display = 'none';
                            testDiv11.style.display = 'flex';
                            testDiv11.style.flexWrap = 'wrap';
                            testDiv11.style.justifyContent = 'center';
                            testDiv11.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv8.removeChild(testCards8[randomNum(testDiv8.childElementCount)]);
                            testDiv9.removeChild(testCards9[randomNum(testDiv9.childElementCount)]);
                            testDiv11.removeChild(testCards11[randomNum(testDiv11.childElementCount)]);
                            testDiv12.removeChild(testCards12[randomNum(testDiv12.childElementCount)]);
                            testDiv13.removeChild(testCards13[randomNum(testDiv13.childElementCount)]);
                            testDiv14.removeChild(testCards14[randomNum(testDiv14.childElementCount)]);
                            testDiv15.removeChild(testCards15[randomNum(testDiv15.childElementCount)]);   

                        } else if(cardImage.name == 11){
                            // "Passing" packs | Styling pack divs
                            testDiv11.style.display = 'none';
                            testDiv12.style.display = 'flex';
                            testDiv12.style.flexWrap = 'wrap';
                            testDiv12.style.justifyContent = 'center';
                            testDiv12.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv8.removeChild(testCards8[randomNum(testDiv8.childElementCount)]);
                            testDiv9.removeChild(testCards9[randomNum(testDiv9.childElementCount)]);
                            testDiv10.removeChild(testCards10[randomNum(testDiv10.childElementCount)]);
                            testDiv12.removeChild(testCards12[randomNum(testDiv12.childElementCount)]);
                            testDiv13.removeChild(testCards13[randomNum(testDiv13.childElementCount)]);
                            testDiv14.removeChild(testCards14[randomNum(testDiv14.childElementCount)]);
                            testDiv15.removeChild(testCards15[randomNum(testDiv15.childElementCount)]);

                        } else if(cardImage.name == 12){
                            // "Passing" packs | Styling pack divs
                            testDiv12.style.display = 'none';
                            testDiv13.style.display = 'flex';
                            testDiv13.style.flexWrap = 'wrap';
                            testDiv13.style.justifyContent = 'center';
                            testDiv13.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv8.removeChild(testCards8[randomNum(testDiv8.childElementCount)]);
                            testDiv9.removeChild(testCards9[randomNum(testDiv9.childElementCount)]);
                            testDiv10.removeChild(testCards10[randomNum(testDiv10.childElementCount)]);
                            testDiv11.removeChild(testCards11[randomNum(testDiv11.childElementCount)]);
                            testDiv13.removeChild(testCards13[randomNum(testDiv13.childElementCount)]);
                            testDiv14.removeChild(testCards14[randomNum(testDiv14.childElementCount)]);
                            testDiv15.removeChild(testCards15[randomNum(testDiv15.childElementCount)]);

                        } else if(cardImage.name == 13){
                            // "Passing" packs | Styling pack divs
                            testDiv13.style.display = 'none';
                            testDiv14.style.display = 'flex';
                            testDiv14.style.flexWrap = 'wrap';
                            testDiv14.style.justifyContent = 'center';
                            testDiv14.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv8.removeChild(testCards8[randomNum(testDiv8.childElementCount)]);
                            testDiv9.removeChild(testCards9[randomNum(testDiv9.childElementCount)]);
                            testDiv10.removeChild(testCards10[randomNum(testDiv10.childElementCount)]);
                            testDiv11.removeChild(testCards11[randomNum(testDiv11.childElementCount)]);
                            testDiv12.removeChild(testCards12[randomNum(testDiv12.childElementCount)]);
                            testDiv14.removeChild(testCards14[randomNum(testDiv14.childElementCount)]);
                            testDiv15.removeChild(testCards15[randomNum(testDiv15.childElementCount)]);

                        } else if(cardImage.name == 14){
                            // "Passing" packs | Styling pack divs
                            testDiv14.style.display = 'none';
                            testDiv15.style.display = 'flex';
                            testDiv15.style.flexWrap = 'wrap';
                            testDiv15.style.justifyContent = 'center';
                            testDiv15.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv8.removeChild(testCards8[randomNum(testDiv8.childElementCount)]);
                            testDiv9.removeChild(testCards9[randomNum(testDiv9.childElementCount)]);
                            testDiv10.removeChild(testCards10[randomNum(testDiv10.childElementCount)]);
                            testDiv11.removeChild(testCards11[randomNum(testDiv11.childElementCount)]);
                            testDiv12.removeChild(testCards12[randomNum(testDiv12.childElementCount)]);
                            testDiv13.removeChild(testCards13[randomNum(testDiv13.childElementCount)]);
                            testDiv15.removeChild(testCards15[randomNum(testDiv15.childElementCount)]);

                        } else if(cardImage.name == 15){
                            // "Passing" packs | Styling pack divs
                            testDiv15.style.display = 'none';
                            testDiv8.style.display = 'flex';
                            testDiv8.style.flexWrap = 'wrap';
                            testDiv8.style.justifyContent = 'center';
                            testDiv8.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv8.removeChild(testCards8[randomNum(testDiv8.childElementCount)]);
                            testDiv9.removeChild(testCards9[randomNum(testDiv9.childElementCount)]);
                            testDiv10.removeChild(testCards10[randomNum(testDiv10.childElementCount)]);
                            testDiv11.removeChild(testCards11[randomNum(testDiv11.childElementCount)]);
                            testDiv12.removeChild(testCards12[randomNum(testDiv12.childElementCount)]);
                            testDiv13.removeChild(testCards13[randomNum(testDiv13.childElementCount)]);
                            testDiv14.removeChild(testCards14[randomNum(testDiv14.childElementCount)]);
                        }

                        // Pack(s) 3
                        if(cardImage.name == 16){
                            // "Passing" packs | Styling pack divs
                            testDiv16.style.display = 'none';
                            testDiv17.style.display = 'flex';
                            testDiv17.style.flexWrap = 'wrap';
                            testDiv17.style.justifyContent = 'center';
                            testDiv17.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv17.removeChild(testCards17[randomNum(testDiv17.childElementCount)]);
                            testDiv18.removeChild(testCards18[randomNum(testDiv18.childElementCount)]);
                            testDiv19.removeChild(testCards19[randomNum(testDiv19.childElementCount)]);
                            testDiv20.removeChild(testCards20[randomNum(testDiv20.childElementCount)]);
                            testDiv21.removeChild(testCards21[randomNum(testDiv21.childElementCount)]);
                            testDiv22.removeChild(testCards22[randomNum(testDiv22.childElementCount)]);
                            testDiv23.removeChild(testCards23[randomNum(testDiv23.childElementCount)]);

                        } else if(cardImage.name == 17){
                            // "Passing" packs | Styling pack divs
                            testDiv17.style.display = 'none';
                            testDiv18.style.display = 'flex';
                            testDiv18.style.flexWrap = 'wrap';
                            testDiv18.style.justifyContent = 'center';
                            testDiv18.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv16.removeChild(testCards16[randomNum(testDiv16.childElementCount)]);
                            testDiv18.removeChild(testCards18[randomNum(testDiv18.childElementCount)]);
                            testDiv19.removeChild(testCards19[randomNum(testDiv19.childElementCount)]);
                            testDiv20.removeChild(testCards20[randomNum(testDiv20.childElementCount)]);
                            testDiv21.removeChild(testCards21[randomNum(testDiv21.childElementCount)]);
                            testDiv22.removeChild(testCards22[randomNum(testDiv22.childElementCount)]);
                            testDiv23.removeChild(testCards23[randomNum(testDiv23.childElementCount)]);

                        } else if(cardImage.name == 18){
                            // "Passing" packs | Styling pack divs
                            testDiv18.style.display = 'none';
                            testDiv19.style.display = 'flex';
                            testDiv19.style.flexWrap = 'wrap';
                            testDiv19.style.justifyContent = 'center';
                            testDiv19.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv16.removeChild(testCards16[randomNum(testDiv16.childElementCount)]);
                            testDiv17.removeChild(testCards17[randomNum(testDiv17.childElementCount)]);
                            testDiv19.removeChild(testCards19[randomNum(testDiv19.childElementCount)]);
                            testDiv20.removeChild(testCards20[randomNum(testDiv20.childElementCount)]);
                            testDiv21.removeChild(testCards21[randomNum(testDiv21.childElementCount)]);
                            testDiv22.removeChild(testCards22[randomNum(testDiv22.childElementCount)]);
                            testDiv23.removeChild(testCards23[randomNum(testDiv23.childElementCount)]);

                        } else if(cardImage.name == 19){
                            // "Passing" packs | Styling pack divs
                            testDiv19.style.display = 'none';
                            testDiv20.style.display = 'flex';
                            testDiv20.style.flexWrap = 'wrap';
                            testDiv20.style.justifyContent = 'center';
                            testDiv20.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv16.removeChild(testCards16[randomNum(testDiv16.childElementCount)]);
                            testDiv17.removeChild(testCards17[randomNum(testDiv17.childElementCount)]);
                            testDiv18.removeChild(testCards18[randomNum(testDiv18.childElementCount)]);
                            testDiv20.removeChild(testCards20[randomNum(testDiv20.childElementCount)]);
                            testDiv21.removeChild(testCards21[randomNum(testDiv21.childElementCount)]);
                            testDiv22.removeChild(testCards22[randomNum(testDiv22.childElementCount)]);
                            testDiv23.removeChild(testCards23[randomNum(testDiv23.childElementCount)]);

                        } else if(cardImage.name == 20){
                            // "Passing" packs | Styling pack divs
                            testDiv20.style.display = 'none';
                            testDiv21.style.display = 'flex';
                            testDiv21.style.flexWrap = 'wrap';
                            testDiv21.style.justifyContent = 'center';
                            testDiv21.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv16.removeChild(testCards16[randomNum(testDiv16.childElementCount)]);
                            testDiv17.removeChild(testCards17[randomNum(testDiv17.childElementCount)]);
                            testDiv18.removeChild(testCards18[randomNum(testDiv18.childElementCount)]);
                            testDiv19.removeChild(testCards19[randomNum(testDiv19.childElementCount)]);
                            testDiv21.removeChild(testCards21[randomNum(testDiv21.childElementCount)]);
                            testDiv22.removeChild(testCards22[randomNum(testDiv22.childElementCount)]);
                            testDiv23.removeChild(testCards23[randomNum(testDiv23.childElementCount)]);

                        } else if(cardImage.name == 21){
                            // "Passing" packs | Styling pack divs
                            testDiv21.style.display = 'none';
                            testDiv22.style.display = 'flex';
                            testDiv22.style.flexWrap = 'wrap';
                            testDiv22.style.justifyContent = 'center';
                            testDiv22.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv16.removeChild(testCards16[randomNum(testDiv16.childElementCount)]);
                            testDiv17.removeChild(testCards17[randomNum(testDiv17.childElementCount)]);
                            testDiv18.removeChild(testCards18[randomNum(testDiv18.childElementCount)]);
                            testDiv19.removeChild(testCards19[randomNum(testDiv19.childElementCount)]);
                            testDiv20.removeChild(testCards20[randomNum(testDiv20.childElementCount)]);
                            testDiv22.removeChild(testCards22[randomNum(testDiv22.childElementCount)]);
                            testDiv23.removeChild(testCards23[randomNum(testDiv23.childElementCount)]);

                        } else if(cardImage.name == 22){
                            // "Passing" packs | Styling pack divs
                            testDiv22.style.display = 'none';
                            testDiv23.style.display = 'flex';
                            testDiv23.style.flexWrap = 'wrap';
                            testDiv23.style.justifyContent = 'center';
                            testDiv23.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv16.removeChild(testCards16[randomNum(testDiv16.childElementCount)]);
                            testDiv17.removeChild(testCards17[randomNum(testDiv17.childElementCount)]);
                            testDiv18.removeChild(testCards18[randomNum(testDiv18.childElementCount)]);
                            testDiv19.removeChild(testCards19[randomNum(testDiv19.childElementCount)]);
                            testDiv20.removeChild(testCards20[randomNum(testDiv20.childElementCount)]);
                            testDiv21.removeChild(testCards21[randomNum(testDiv21.childElementCount)]);
                            testDiv23.removeChild(testCards23[randomNum(testDiv23.childElementCount)]);

                        } else if(cardImage.name == 23){
                            // "Passing" packs | Styling pack divs
                            testDiv23.style.display = 'none';
                            testDiv16.style.display = 'flex';
                            testDiv16.style.flexWrap = 'wrap';
                            testDiv16.style.justifyContent = 'center';
                            testDiv16.style.position = 'relative';

                            // "Other players picking" cards | Randomly removing cards
                            testDiv16.removeChild(testCards16[randomNum(testDiv16.childElementCount)]);
                            testDiv17.removeChild(testCards17[randomNum(testDiv17.childElementCount)]);
                            testDiv18.removeChild(testCards18[randomNum(testDiv18.childElementCount)]);
                            testDiv19.removeChild(testCards19[randomNum(testDiv19.childElementCount)]);
                            testDiv20.removeChild(testCards20[randomNum(testDiv20.childElementCount)]);
                            testDiv21.removeChild(testCards21[randomNum(testDiv21.childElementCount)]);
                            testDiv22.removeChild(testCards22[randomNum(testDiv22.childElementCount)]);
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
xhttp.open("GET", "/static/sets/znr.json", true);
xhttp.send();