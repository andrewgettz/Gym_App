var express = require("express");
var exphbs = require("express-handlebars");
const route = require("./controllers");
var db = require("./models");
const path = require("path");
var app = express();
const PORT = process.env.PORT || 3001;
const expressSession = require("express-session");
const flash = require('connect-flash');
const host = '0.0.0.0';

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
    secret: process.env.SESSION_SECRET, /*'CCCFm7qMVCmbcxh3'*/
    cookie: {},
    resave: false,
    saveUninitialized: false
}));


// Handlebars
app.engine("handlebars", exphbs.engine());
  app.set("view engine", "handlebars");
app.set('views', './views');

//Routes 

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
//app.use(function (req, res, next) {
//    res.locals.message = req.flash();
//    console.log(req.flash())
//    next();
//});

app.use("/", route);
app.use(apiCheck);




db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT,host, function() {
      console.log("App listening on PORT " + PORT);
      /*  console.log(express.static('/public/images'));*/
    });
  });




  module.exports = app;
