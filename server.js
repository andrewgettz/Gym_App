var express = require("express");
var exphbs = require("express-handlebars");
const route = require("./controllers");
var db = require("./models");
const path = require("path");
var app = express();
const PORT = process.env.PORT || 3001;
const expressSession = require("express-session");


require("dotenv").config();
const { env } = require("process");


// Middleware
const apiCheck = (req, res, next) => {
    const { apiKey } = req.body;

    if (apiKey === env.process.API_KEY) {
        next();
    } else {
        res.status(400);
    }
}

app.use(expressSession ({
	secret: 'CCCFm7qMVCmbcxh3'/*process.env.SESSION_SECRET*/,
    cookie: {},
    resave: false,
    saveUninitialized: false
}));


// Handlebars
app.engine("handlebars", exphbs.engine());
  app.set("view engine", "handlebars");
app.set('views', './views');

//Routes 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
app.use(apiCheck);
app.use(express.static('images'));



db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
        console.log(express.static('/public/images'));
    });
  });




  module.exports = app;
