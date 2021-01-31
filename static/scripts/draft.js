console.log('Hi');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        // ---------- REFACTOR BELOW ----------
        var testDiv0 = document.getElementById('boosterPackDiv0');
        var testDiv1 = document.getElementById('boosterPackDiv1');
        var testDiv2 = document.getElementById('boosterPackDiv2');
        var testDiv3 = document.getElementById('boosterPackDiv3');
        var testDiv4 = document.getElementById('boosterPackDiv4');
        var testDiv5 = document.getElementById('boosterPackDiv5');
        var testDiv6 = document.getElementById('boosterPackDiv6');
        var testDiv7 = document.getElementById('boosterPackDiv7');

        var testCards0 = document.getElementsByName('0');
        var testCards1 = document.getElementsByName('1');
        var testCards2 = document.getElementsByName('2');
        var testCards3 = document.getElementsByName('3');
        var testCards4 = document.getElementsByName('4');
        var testCards5 = document.getElementsByName('5');
        var testCards6 = document.getElementsByName('6');
        var testCards7 = document.getElementsByName('7');

        var boosterPackDivs = document.getElementsByClassName('boosterPackDiv');
        var countz = 13;

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
            uncommonCards()
            rareCard();
            packCount+= 1;
        };

        function draft(amount){
            for (let i = 0; i < amount; i++){
                boosterPack();
            }
            displayNone();
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

                // ---------- REFACTOR BELOW ----------
                // Appending card images to respective boosterPackDivs
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
                // ---------- REFACTOR ABOVE ----------

                // Appending card images to selected area
                const selectedContainer = document.getElementById('selectedContainer');
                
                cardImage.onclick = () => pickCard();
                
                // Moves cards from packs div to selected div
                function pickCard(){
                    // ---------- REFACTOR BELOW ----------
                    // Appending card images to selected div
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
                    // ---------- REFACTOR ABOVE ----------

                    // ---------- REFACTOR BELOW ----------
                    // Simulates booster pack passing by displaying/showing subsequent packs && simulates "other players" choosing cards by randomly removing a card from subsequent packs
                    if(cardImage.name == 0){
                        // "Passing" packs | Styling pack divs
                        testDiv0.style.display = 'none';
                        testDiv1.style.display = 'flex';
                        testDiv1.style.flexWrap = 'wrap';
                        testDiv1.style.justifyContent = 'center';
                        testDiv1.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        if(boosterPackDivs.length > 0){
                            testDiv1.removeChild(testCards1[randomNum(testDiv1.length)]);
                            testDiv2.removeChild(testCards2[randomNum(testDiv2.length)]);
                            testDiv3.removeChild(testCards3[randomNum(testDiv3.length)]);
                            testDiv4.removeChild(testCards4[randomNum(testDiv4.length)]);
                            testDiv5.removeChild(testCards5[randomNum(testDiv5.length)]);
                            testDiv6.removeChild(testCards6[randomNum(testDiv6.length)]);
                            testDiv7.removeChild(testCards7[randomNum(testDiv7.length)]);
                            console.log('reee');
                            countz--;
                            console.log(countz);

                            // --- IDEA: testDiv0/testCards0.length*TO INTEGER* -> randomNum();
                        }

                    } else if(cardImage.name == 1){
                        // "Passing" packs | Styling pack divs
                        testDiv1.style.display = 'none';
                        testDiv2.style.display = 'flex';
                        testDiv2.style.flexWrap = 'wrap';
                        testDiv2.style.justifyContent = 'center';
                        testDiv2.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        // if(boosterPackDivs.length > 0){
                        //     testDiv2.removeChild(testCards1[randomNum(countz)]);
                        //     testDiv3.removeChild(testCards2[randomNum(countz)]);
                        //     testDiv4.removeChild(testCards3[randomNum(countz)]);
                        //     testDiv5.removeChild(testCards4[randomNum(countz)]);
                        //     testDiv6.removeChild(testCards5[randomNum(countz)]);
                        //     testDiv7.removeChild(testCards6[randomNum(countz)]);
                        //     testDiv0.removeChild(testCards7[randomNum(countz)]);
                        //     console.log('reee');
                        //     countz--;
                        //     console.log(countz);
                        // }
                        console.log(countz);
                    } else if(cardImage.name == 2){
                        // "Passing" packs | Styling pack divs
                        testDiv2.style.display = 'none';
                        testDiv3.style.display = 'flex';
                        testDiv3.style.flexWrap = 'wrap';
                        testDiv3.style.justifyContent = 'center';
                        testDiv3.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        // if(boosterPackDivs.length > 0){
                            // testDiv3.removeChild(testCards3[randomNum(countz)]);
                            // testDiv4.removeChild(testCards4[randomNum(countz)]);
                            // testDiv5.removeChild(testCards5[randomNum(countz)]);
                            // testDiv6.removeChild(testCards6[randomNum(countz)]);
                            // testDiv7.removeChild(testCards7[randomNum(countz)]);
                            // testDiv0.removeChild(testCards1[randomNum(countz)]);
                            // testDiv1.removeChild(testCards2[randomNum(countz)]);
                            // console.log('reee');
                            // countz--;
                            // console.log(countz);
                        // }       
                        console.log(countz);
                    } else if(cardImage.name == 3){
                        // "Passing" packs | Styling pack divs
                        testDiv3.style.display = 'none';
                        testDiv4.style.display = 'flex';
                        testDiv4.style.flexWrap = 'wrap';
                        testDiv4.style.justifyContent = 'center';
                        testDiv4.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        // if(boosterPackDivs.length > 0){
                            // testDiv4.removeChild(testCards4[randomNum(countz)]);
                            // testDiv5.removeChild(testCards5[randomNum(countz)]);
                            // testDiv6.removeChild(testCards6[randomNum(countz)]);
                            // testDiv7.removeChild(testCards7[randomNum(countz)]);
                            // testDiv0.removeChild(testCards1[randomNum(countz)]);
                            // testDiv1.removeChild(testCards2[randomNum(countz)]);
                            // testDiv2.removeChild(testCards3[randomNum(countz)]);
                            // console.log('reee');
                            // countz--;
                            // console.log(countz);
                        // }
                        console.log(countz);
                    } else if(cardImage.name == 4){
                        // "Passing" packs | Styling pack divs
                        testDiv4.style.display = 'none';
                        testDiv5.style.display = 'flex';
                        testDiv5.style.flexWrap = 'wrap';
                        testDiv5.style.justifyContent = 'center';
                        testDiv5.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        // if(boosterPackDivs.length > 0){
                            // testDiv5.removeChild(testCards5[randomNum(countz)]);
                            // testDiv6.removeChild(testCards6[randomNum(countz)]);
                            // testDiv7.removeChild(testCards7[randomNum(countz)]);
                            // testDiv0.removeChild(testCards1[randomNum(countz)]);
                            // testDiv1.removeChild(testCards2[randomNum(countz)]);
                            // testDiv2.removeChild(testCards3[randomNum(countz)]);
                            // testDiv3.removeChild(testCards4[randomNum(countz)]);
                            // console.log('reee');
                            // countz--;
                            // console.log(countz);
                        // }
                        console.log(countz);
                    } else if(cardImage.name == 5){
                        // "Passing" packs | Styling pack divs
                        testDiv5.style.display = 'none';
                        testDiv6.style.display = 'flex';
                        testDiv6.style.flexWrap = 'wrap';
                        testDiv6.style.justifyContent = 'center';
                        testDiv6.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        // if(boosterPackDivs.length > 0){
                            // testDiv6.removeChild(testCards6[randomNum(countz)]);
                            // testDiv7.removeChild(testCards7[randomNum(countz)]);
                            // testDiv0.removeChild(testCards1[randomNum(countz)]);
                            // testDiv1.removeChild(testCards2[randomNum(countz)]);
                            // testDiv2.removeChild(testCards3[randomNum(countz)]);
                            // testDiv3.removeChild(testCards4[randomNum(countz)]);
                            // testDiv4.removeChild(testCards5[randomNum(countz)]);
                            // console.log('reee');
                            // countz--;
                            // console.log(countz);
                        // }
                        console.log(countz);
                    } else if(cardImage.name == 6){
                        // "Passing" packs | Styling pack divs
                        testDiv6.style.display = 'none';
                        testDiv7.style.display = 'flex';
                        testDiv7.style.flexWrap = 'wrap';
                        testDiv7.style.justifyContent = 'center';
                        testDiv7.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        // if(boosterPackDivs.length > 0){
                            // testDiv7.removeChild(testCards7[randomNum(countz)]);
                            // testDiv0.removeChild(testCards1[randomNum(countz)]);
                            // testDiv1.removeChild(testCards2[randomNum(countz)]);
                            // testDiv2.removeChild(testCards3[randomNum(countz)]);
                            // testDiv3.removeChild(testCards4[randomNum(countz)]);
                            // testDiv4.removeChild(testCards5[randomNum(countz)]);
                            // testDiv5.removeChild(testCards6[randomNum(countz)]);
                            // console.log('reee');
                            // countz--;
                            // console.log(countz);
                        // }
                        console.log(countz);
                    } else {
                        // "Passing" packs | Styling pack divs
                        testDiv7.style.display = 'none';
                        testDiv0.style.display = 'flex';
                        testDiv0.style.flexWrap = 'wrap';
                        testDiv0.style.justifyContent = 'center';
                        testDiv0.style.position = 'relative';

                        // "Other players picking" cards | Randomly removing cards
                        // if(boosterPackDivs.length > 0){
                        testDiv0.removeChild(testCards1[randomNum(testDiv0.length)]);
                        //     testDiv1.removeChild(testCards2[randomNum(countz)]);
                        //     testDiv2.removeChild(testCards3[randomNum(countz)]);
                        //     testDiv3.removeChild(testCards4[randomNum(countz)]);
                        //     testDiv4.removeChild(testCards5[randomNum(countz)]);
                        //     testDiv5.removeChild(testCards6[randomNum(countz)]);
                        //     testDiv6.removeChild(testCards7[randomNum(countz)]);
                        //     console.log('reee');
                        //     countz--;
                        //     console.log(countz);
                        // }
                        console.log(countz);
                    } 
                    // ---------- REFACTOR ABOVE ----------

                    selectedContainer.append(cardImage);
                    cardImage.className = 'selectedCards';
                    cardImage.name = 'selected';
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