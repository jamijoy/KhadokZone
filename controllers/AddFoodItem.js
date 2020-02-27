var express 	= require('express');
var router 		= express.Router();
var foodModel   = require.main.require('./models/food-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	res.render('add/AddFoodItem');
});

router.post('/', function(req, res){
	
	var food = {
		name   : req.body.name,
		des    : req.body.des,
		price  : req.body.price,
		type   : req.body.type,
		star   : req.body.star,
		rid    : req.body.rid,
	};

	foodModel.insert(food, function(status){
		if(status){
			res.redirect('/home');
			console.log("Registered Food");
			// res.send('Registered');
		}else{
			console.log("Couldn't Register Food");
			// res.send("Couldn't Register");
			res.redirect('/home');
		}
	});
})

module.exports = router;

