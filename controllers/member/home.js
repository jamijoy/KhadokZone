var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/login-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	if(req.cookies['username'] != null){
		userModel.getByName(req.cookies['username'], function(result){
			res.render('member/home/index', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});

router.get('/alljob', function(req, res){
	if(req.cookies['username'] != null)
	{
		userModel.getAllJob(function(results){
			if(results.length > 0){
				var name = req.cookies['username'];
				res.render('employee/alljob', {joblist: results, uname : name});
			}else{
				res.send('Number of registered JObs is : 0 [Empty].');
			}
		});
	}
	else{
		res.redirect('/logout');
	}
})

router.post('/registerJob', function(req, res){
	
	var job = {
		cname  : req.body.cname,
		title  : req.body.title,
		loc    : req.body.loc,
		sal    : req.body.sal
	};

	userModel.insertJob(job, function(status){
		if(status){
			res.redirect('/employee/home/alljob');
			console.log("Registered Job");
			// res.send('Registered');
		}else{
			console.log("Couldn't Register Job");
			// res.send("Couldn't Register");
			res.redirect('/employee/home');
		}
	});
})

router.get('/edit/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('home/edit', {user: result});
	});
})

router.post('/edit/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password,
		type: req.body.type,
		id: req.params.id
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/home/alluser');
		}else{
			res.redirect('/home/edit/'+req.params.id);
		}
	});
})


router.get('/delete/:id', function(req, res){
	if(req.cookies['username'] != null)
	{
		userModel.getById(req.params.id, function(result){
			res.render('home/delete', {user: result, iD : req.params.id});
		});
	}
	else{
		res.redirect('/logout');
	}
})

router.post('/delete/:id', function(req, res){
	if(req.cookies['username'] != null)
	{
		userModel.delete(req.params.id, function(status){
			if(status){
				res.redirect('/home/alluser');
			}else{
				res.redirect('/home/delete/'+req.params.id);
			}
		});
	}
	else{
		res.redirect('/logout');
	}	
})

module.exports = router;

