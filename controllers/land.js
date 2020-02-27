var express 	= require('express');
var router 		= express.Router();
var foodModel   = require.main.require('./models/food-model');

router.get('/', function(req, res){	
	foodModel.getAll(function(results){
			if(results.length > 0){
				res.render('index', {foodlist: results});
			}else{
				res.send('Food List : 0 [Empty].');
			}
		});
});
module.exports = router;

