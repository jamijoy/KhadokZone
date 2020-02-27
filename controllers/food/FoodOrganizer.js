var express 	= require('express');
var router 		= express.Router();
var foodModel   = require.main.require('./models/food-model');
var revModel   = require.main.require('./models/review-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/:Fid', function(req, res){	
	foodModel.getById(req.params.Fid, function(result){
		res.render('food/index', {food: result});
	});
});

router.get('/Review/:Fid', function(req, res){	
	revModel.getByFoodId(req.params.Fid, function(result){
		res.render('food/ReviewIndex', {rev: result,fid:req.params.Fid});
	});
});

module.exports = router;

