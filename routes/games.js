var express = require('express');
var router = express.Router();



/*
 * GET game.
 * 
 * This should get a game by id, and start a chess game from 
 * the FEN string.
 * 
 */
router.get('/:gameId', function(req, res){
	var db = req.db;
	var collection = db.get('games');
	var gameToSearch = req.params.gameId;
	collection.find({'_id': gameToSearch}, function(err, docs) {
		if(err === null){
			res.render('game', { 
				title: 			docs[0].gameName,
				player1: 		docs[0].player1,
				player2: 		docs[0].player2,
				startingDate: 	docs[0].startDate,
				id : 			docs[0]._id,
				docs: 		docs 
			});
		}else{
			res.send({msg:'error: ' + err});
		}
		
	});
});

/*
 * GET gamelist.
 */
router.get('/gamelist', function(req, res){
	var db = req.db;
	var collection = db.get('games');
	collection.find({},{},function(e, docs){
		res.json(docs);
	});
});


router.get('/gamelist/:gameId', function(req, res) {
	var db = req.db;
	var collection = db.get('games');
	var gameToSearch = req.params.gameId;
	collection.find({'_id': gameToSearch}, function(err, docs) {
		if(err === null){
			res.json(docs);
		}else{
			res.send({msg:'error: ' + err});
		}
		
	});
});

module.exports = router;