const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const expressSession = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local');

require("dotenv").config();

const db = require("./models");
const { env } = require("process");

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

// Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

  //Routes 


db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  
  module.exports = app;

const strategy = new LocalStrategy(function verify(username, password, apiKey, cb) {
  db.get('SELECT * FROM users WHERE username = ?', [ username ], (err, user) => {
    if (apiKey !== env.process.API_KEY){
      return cb(null, false, { message: 'Incorrect username or password.' });
    }

    if (err) {
      return cb(err); 
    }

    if (!user) {
      return cb(null, false, { message: 'Incorrect username or password.' }); 
    }

    crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
      if (err) { 
        return cb(err); 
      }
      
      if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }

      return cb(null, user);
    });
  });
});

passport.use(strategy);

app.post('/login/password',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  (req, res) => {
    res.redirect('/~' + req.user.username);
  }
);