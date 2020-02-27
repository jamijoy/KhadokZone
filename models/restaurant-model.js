var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByName: function(name, callback){
		var sql = "select * from KhadokUsers where Uname=?";
		db.getResult(sql, [name], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from khadokusers where Uname=? and password=?";
		db.getResult(sql, [user.uname, user.password], function(result){
			if(result.length == 1){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll:function(callback){
		var sql = "select * from khadokfoods";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getAllJob:function(callback){
		var sql = "select * from job";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into KhadokRestaurants values(?,?,?,?)";
		db.execute(sql, [null, user.name, user.loc, user.star], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insertJob: function(job, callback){
		var sql = "insert into job values(?,?,?,?)";
		db.execute(sql, [job.cname, job.title, job.loc, job.sal], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "update user set name=?, mail=?, companyName=?, contact=?, username=?, password=? where id=?";
		db.execute(sql, [user.name, user.mail, user.cname, user.contact, user.uname, user.password, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}