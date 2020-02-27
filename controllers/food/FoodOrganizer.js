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
		res.render('food/ReviewIndex', {rev: result,fid:req.params.Fid,uid:req.cookies['userid'],uname:req.cookies['username']});
	});
});

router.post('/Review/:Fid', function(req, res){	
	console.log(">>> "+req.cookies['userid']);
	console.log(">>> "+req.params.Fid);
	console.log(">>> "+req.cookies['username']);
	console.log(">>> "+req.body.revField);
	
	var rev={
		uid		:	req.cookies['userid'],
		fid		:	req.params.Fid,
		uname	:	req.cookies['username'],
		review	:	req.body.revField,
	}
	revModel.insert(rev, function(status){
		if(status)
		{
			console.log('Review Added');
			res.redirect('/');
		}
		else
		{
			console.log("Review Couldn't get Updated ");
			res.redirect('/Review/'+req.params.Fid);
		}
	});
});

module.exports = router;

