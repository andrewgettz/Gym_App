var express = require("express");
var exphbs = require("express-handlebars");
const route = require("./controllers");
var db = require("./models");
const path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;

//Middleware

// Handlebars
app.engine("handlebars", exphbs.engine());
  app.set("view engine", "handlebars");
app.set('views', './views');

//Routes 
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", route);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    
    });
  });
  
  module.exports = app;
