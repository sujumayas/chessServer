

* Dependencies *
---------------

	- body-parser: ~1.15.1,
	- cookie-parser: ~1.4.3,
	- debug: ~2.2.0,
	- express: ~4.13.4,
	- jade: ~1.11.0,
	- monk: ^3.1.3,
	- morgan: ~1.7.0,
	- serve-favicon: ~2.3.0


* Run the aplication *
---------------------

	- Already Done: 

		$ npm install -g express-generator
		$ express chessServer //to create this Boilerplate server

		$ // Added this data to connect to the Database
		$ var mongo = require('mongodb');
		$ var monk = require('monk');
		$ var db = monk('localhost:27017/chessServer');

		$ // Make our db accessible to our router
		$ app.use(function(req,res,next){
		$ 	req.db = db;
		$ 	next();
		$ });

	- Start the database: 

		$ mongod --dbpath [...]/chessServer/data

		> Optional : Check that the database connection 

		$ mongo
		$ use chessServer
		$ db.userlist.insert({data : data}) 

	- Prepare the Aplication

		$ npm install
		$ npm install nodemon -g   //We install it globally.
		$ npm install monk --save  //This will take care of the Database conection

	- Start the app with nodemon

		$ nodemon //on same filepath as bin/


* Run the aplication *
---------------------

	- TODO BBDD: 

		- Cambiar todo a Mongoose
		- Preparar la BBDD de Games para que tengan FEN strings por jugada. 
		

	- TODO Front:

		- Enviar con Ajax el FEN string luego de cada movimiento. 
		- 

* Advanced today (21 Nov 2016) *
---------------------------------

	Modified	:	public/stylesheets/style.css
	Modified	:	routes/games.js
	Modified	:	views/layout.jade

	Created 	: 	chessboardTest/
	Created 	: 	public/images/
	Created 	: 	public/javascripts/
	Created 	: 	public/stylesheets/chessboard.css
	Created 	: 	views/game.jade


	If you enter here: 

		http://localhost:3000/games/58175c2e758f692849935874

	Now you can see the board 

		Styles 		: (chessboard.css)
		Javascript  : (chess.js + chessboard.js + chessgame.js)
		images		: (images/chesspieces/wikipedia) *Important: I had to change 					chess.js to parse the correct images folder. 



	TODO: 

	- Add the FEN string to the Model & testing data (DB) of the games. (easy)
	- Start the games with that FEN string. (easy)
	- Restrict movement to the correct moves. (easy)
	- Restrict movement BY USER (hard)
	- Update the FEN string after every movement. (medium)
	- Save all movements to the game model with the player names and/or Ids that make the moves and have the posibility to re-start a game where you left it.
	- Add historical-view of the game (before LOADING it to play)  
	- Add BACK & FORDWARD Buttons to check all the moves of a game.
	- Add a button to LOAD the game and play it. 
	- The historical view must be the DEFAULT view of a game. Not the playable one.  





