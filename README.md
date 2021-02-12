# TODO

- [x] Fix image carousel repositioning when changing images.

- [x] Add event listener on media query to:
	- [x] Change to/from image carousel when window is resized
	- [x] Change from image carousel when window is resized
	- [x] Navbar to/from hamburger menu when media query

- [x] When media query <=630, have set title always visible
	- [x] Fix extra set names popping up	

- [ ] Set up node + express
	- ~~[x] Route html through node~~
	- ~~[x] Change HTML routing to be express kind. (css, images, html) /static/images/logoGrad1.png --> | scripts/window.js --> /scripts/window.js~~
	- [ ] Dynamically change sets for draft.js. Pass in draft name as a function in app.js routing + add routes /draft/setName

- [x] ~~Refactor HTML to extend layouts + remove redundant code~~ !*Did with handlebars*!

- [x] ~~Link MTG Card API~~

- [ ] HTML for drafting page
	- [x] Send MTG API to HTML
	- [x] ~~Event for selectedCards. When hovered, create preview of full card to the left of container~~ Instead added z-index to card appear in the forefront when hovered.
	- ~~[ ] Add draggable/repositional to selectedCards~~
	- [ ] Add sorting to selectedCards - Order picked/CMC/Color
	- [x] Remove hard-coded card img tags 
	- [ ] FIX DRAFT CONTAINER TO BE RESIZABLE FOR WINDOW, BUT NOT FOR CARD AMOUNT

- [x] Border Radius on Draft cards to remove non-transparent corners

- [x] Submit contact form to DB or email

- [x] Add all sets html

- [ ] Media Queries for draft page

- [ ] Double check for accessibility(alt, etc.)

- [ ] Take views folder (outside of 'static') and replace the one in static with it (and fix express routing)

- [ ] Delete html files (will also stop localhost from loading index.html)

___
**Ideas** 

 - ~~Have each pack create its own div within cardContainer. Currently creating packs within packsCards div, which is nested within cardContainer. When a card within its div is clicked, display it to none, and display next div to show to give the idea of passing card packs in a draft.~~
 - Create a Sealed Section?
 - sass for css?
 __

 # TOREFACTOR
 - [ ] html variable names (and their corresponding css/js variable declarations)

 - [x] js variable names (mostly titled test(div/pack/etc)

 __

# About

- node.js npm install -g npm

- express npm install express --save

- handlebars npm i express-handlebars

- request npm i (something??)

- Contact page form connects to Formspree to catalogue messages.

