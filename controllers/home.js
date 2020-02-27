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
			res.render('home/index', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});

router.post('/registerEmp', function(req, res){
	
	var user = {
		name   : req.body.name,
		cname  : req.body.cname,
		contact: req.body.contact,
		uname  : req.body.uname,
		pass   : req.body.pass,
		mail   : req.body.mail,
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/alluser');
			console.log("Registered Emp");
			// res.send('Registered');
		}else{
			console.log("Couldn't Register");
			// res.send("Couldn't Register");
			res.redirect('/home');
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
		name: req.body.name,
		uname: req.body.uname,
		cname: req.body.cname,
		mail: req.body.mail,
		password: req.body.password,
		contact: req.body.contact,
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

