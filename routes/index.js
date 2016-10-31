var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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