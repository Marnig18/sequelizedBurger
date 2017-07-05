var connection = require("../config/connection.js");



////Function to insert question marks in place of values
function printQuestionMarks(num){
	var arr = [];

	for (var i=0; i<num;i++){
		arr.push("?");
	}
	return arr.toString();
}


///Funtion to convert object to sql snytax
function objToSql(ob){
	var arr = [];

	for (var key in ob){
		if(Object.hasOwnProperty.call(ob,key)){
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
}



////ORM

var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err,result){
			if(err) throw err;
			cb(result);
		});	

	},

///FUNCTION TO INSERT NEW BURGER
	insertOne: function(table, cols, vals, cb){
		var queryString = "INSERT INTO "  + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if(err) throw err;
			cb(result);

		});
	},

	////FUNCTION TO CHANGE DEVOURVED STATE
	updateOne: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	}
};

////EXPORTING THE ORM for the model
 module.exports = orm;










