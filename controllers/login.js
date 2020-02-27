var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/login-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		var user ={
			uname: req.body.uname,
			password: req.body.password
		};

		userModel.validate(user, function(status){
			if(status){
				res.cookie('username', req.body.uname);
				if(req.body.uname == "admin")
				{
					res.redirect('/home');
				}
				else
				{
					res.redirect('/member/home');
				}
				
			}else{
				res.redirect('/login');
			}
		});
});

module.exports = router;

