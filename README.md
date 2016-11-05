

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










