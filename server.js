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
app.use(express.static('styles'));
app.use("/", route);
app.use(apiCheck);



//Routes 


//app.post('/login/createUser', (req, res) => {
//    const { username, password, name } = req.body;

//    let saltAndHash;

//    createSaltAndHash(password).then((res) => {
//        saltAndHash = res;

//        // Change this for db
//        db.insert('INSERT INTO user (name, username, hashed_password, salt VALUES ?, ?, ?, ?', [name, username, saltAndHash.hash, saltAndHash.salt]);

//        res.redirect('/~' + req.user.username);
//    });
//});

//app.post('/login/updatePassword', (req, res) => {
//    const { username, password } = req.body;

//    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
//        if (err) {
//            res.status(400).json({ err });
//        }

//        let saltAndHash;

//        createSaltAndHash(password).then((res) => {
//            saltAndHash = res;

//            // Change this for db
//            db.insert('UPDATE user SET hashed_password = ?, salt = ?', [saltAndHash.hash, saltAndHash.salt]);

//            res.redirect('/~' + req.user.username);
//        });
//    });
//});



db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    
    });
  });




  module.exports = app;
