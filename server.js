

///DEPENDECIES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");


//// Creating Server
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));

////Body Parser Code

app.use(bodyParser.urlencoded({ extended: false}));


app.use(methodOverride("_method"));

/////HandleBars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

///ROUTER
var routes = require("./controllers/burgers_controller.js");


app.use("/", routes);
////Listener


app.listen(port, function(){
	console.log("App listening on PORT: " + port);
})