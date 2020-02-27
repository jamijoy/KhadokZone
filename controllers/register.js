var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/login-model');
// const check     = require('express-validator');
// const validationResult = require('express-validator');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.render('register/index');
	}else{
		res.redirect('/home');
	}
});

// router.post('/', function(req, res, next){
  // Finds the validation errors in this request and wraps them in an object with handy functions
  // req.check('mail').isEmail();
  // req.check('name').isLength({ min: 5 });
  // var errors = req.ValidationErrors();
  
  // if (!errors.isEmpty()) 
  // {
    // return res.status(422).json({ errors: errors.array() });
	// req.session.errors = errors;
	// req.session.success = false;
  // }
  // else
  // {
	// req.session.success = true;
	// console.log('Data Validate');
  // }
// });

router.post('/', function(req, res){
	
	var user = {
		name: req.body.name,
		pass: req.body.pass,
		type: req.body.type
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/login');
			console.log('Registered');
		}else{
			console.log("Couldn't Register");
			res.redirect('/register');
		}
	});
})

module.exports = router;

