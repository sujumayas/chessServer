var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res, next) {
	var db = req.db;
	var collection = db.get('userlist');
	collection.find({},{},function(e, docs){
		res.json(docs);
	});
});

/*
 * GET user in userlist.
 */
router.get('/userlist/:userId', function(req, res) {
	var db = req.db;
	var collection = db.get('userlist');
	var userToShow = req.params.userId;
	collection.find({'_id': userToShow}, function(err, docs) {
		if(err === null){
			res.json(docs);
		}else{
			res.send({msg:'error: ' + err});
		}
		
	});
});


/*
 * GET all games for user in userlist.
 */
router.get('/userlist/:userId/games', function(req, res) {
	var db = req.db;
	var collection = db.get('userlist');
	var userToValidate = req.params.userId; //this will not work yet because we are checking for username
	collection.find({'_id': userToValidate},{"_id":0,"username":0,"email":0,"fullname":0,"age":0,"location":0,"gender":0,'savedgames':1},function(err, docs) {
		if(err === null){
			res.json(docs);
		}else{
			res.send({msg:'error: ' + err});
		}
		
	});
});





module.exports = router;

//
//	Just to know
// 
// 	The "res" variable represents the response 
// 	and has a number of useful methods:
//
//		render: to render a view (use a jade template)
//		send: to send plain text content to the client
//		json: to send a json object to the client
//		redirect: to redirect the client to a new address
//		