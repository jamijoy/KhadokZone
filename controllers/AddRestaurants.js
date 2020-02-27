var express 	= require('express');
var router 		= express.Router();
var restModel   = require.main.require('./models/Restaurant-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	res.render('add/AddRestaurants');
});

router.post('/', function(req, res){
	
	var rest = {
		name   : req.body.name,
		loc    : req.body.loc,
		star   : req.body.star,
	};

	restModel.insert(rest, function(status){
		if(status){
			res.redirect('/home');
			console.log("Registered Restaurant");
			// res.send('Registered');
		}else{
			console.log("Couldn't Register Restaurant");
			// res.send("Couldn't Register");
			res.redirect('/home');
		}
	});
})

module.exports = router;

