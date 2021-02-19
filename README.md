# TODO

- [x] Fix image carousel repositioning when changing images.

- [x] Add event listener on media query to:
	- [x] Change to/from image carousel when window is resized
	- [x] Change from image carousel when window is resized
	- [x] Navbar to/from hamburger menu when media query

- [x] When media query <=630, have set title always visible
	- [x] Fix extra set names popping up	

- [x] Set up node + express
	- ~~[x] Route html through node~~
	- ~~[x] Change HTML routing to be express kind. (css, images, html) /static/images/logoGrad1.png --> | scripts/window.js --> /scripts/window.js~~
	- [x] Dynamically change sets for draft.js. Pass in draft name as a function in app.js routing + add routes /draft/setName

- [x] ~~Refactor HTML to extend layouts + remove redundant code~~ !*Did with handlebars*!

- [x] ~~Link MTG Card API~~

- [x] HTML for drafting page
	- [x] Send MTG API to HTML
	- [x] ~~Event for selectedCards. When hovered, create preview of full card to the left of container~~ Instead added z-index to card appear in the forefront when hovered.
	- ~~[ ] Add draggable/repositional to selectedCards~~
	- ~~[ ] Add sorting to selectedCards - Order picked/CMC/Color~~
	- [x] Remove hard-coded card img tags 
	- [x] FIX DRAFT CONTAINER TO BE RESIZABLE FOR WINDOW, BUT NOT FOR CARD AMOUNT

- [x] Border Radius on Draft cards to remove non-transparent corners

- [x] Submit contact form to DB or email

- [x] Add all sets html

- [x] Media Queries for draft page

- [x] Double check for accessibility(alt, etc.)

- [x] Download ~~img~~ text of completed draft

- [ ] Take views folder (outside of 'static') and replace the one in static with it (and fix express routing)

- [x] Delete html files (will also stop localhost from loading index.html)

- [x] Error handling, specifically if no url route is found

- [ ] Color variable css

___
**Ideas** 

 - ~~Have each pack create its own div within cardContainer. Currently creating packs within packsCards div, which is nested within cardContainer. When a card within its div is clicked, display it to none, and display next div to show to give the idea of passing card packs in a draft.~~
 - Create a Sealed Section?
 - sass for css?
 __

 # TOREFACTOR
 - [x] html variable names (and their corresponding css/js variable declarations)

 - [x] js variable names (mostly titled test(div/pack/etc)

 - [ ] prettier clean up of files when ready to ship

 __

# About

- node.js npm install -g npm

- express npm install express --save

- handlebars npm i express-handlebars

- request npm i (something??)

- Contact page form connects to Formspree to catalogue messages. 

