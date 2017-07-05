var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


///ROUTE TO POST INFORMATION FROM THE DATABASE
router.get("/", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

////ROUTE TO ADD NEW BURGER
router.post("/", function(req, res){
	burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function (){
		res.redirect("/");
	});
});

////ROUTE TO DEVOUR A BURGER
router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		devoured: true
	}, condition, function(){
		res.redirect("/")
	
	});
});


module.exports = router;