var orm = require("../config/orm.js");

var burger = {

//SELECTING ALL BURGERS	
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
///ADDING A BURGER
	insertOne: function(cols, vals, cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},
////DEVOURING BURGERS	
	updateOne: function(objColVals, condition, cb){
		orm.updateOne("burgers", objColVals, condition, function(res){
			cb(res);
		})
	}
};

module.exports = burger;