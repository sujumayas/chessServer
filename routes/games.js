var express = require('express');
var router = express.Router();


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