const router = require('express').Router();
const passport = require("passport");
const LocalStrategy = require('passport-local');
const childcontroller = require('../controllers/child')
const parentcontroller = require('../controllers/parent')
const logincontroller = require('../controllers/login')
const { Parent, Child, User } = require("../models");
var express = require("express");

var app = express();
app.use(express.static('public'));



//login

router.get('/login', function (req, res) {
	
	res.render('login', {});
});



router.post("/login", (req, res) => {
    Parent.findOne({
        where: {
            email: req.body.username,
        },
    }).then((dbUserData) => {
        if (!dbUserData) {
            res.status(400).json({ message: "No user with that email address!" });
            return;
        }


        req.session.save(() => {
            req.session.parentid = dbUserData.id;
            req.session.username = dbUserData.email;
            req.session.name = dbUserData.name_first;
            req.session.loggedIn = true;

            res.redirect('/landing');
            
        });
    });
});


//parents

router.get('/newparent', parentcontroller.parent_get);
router.post("/newparent", parentcontroller.parent_post)


//child
router.get('/', childcontroller.index);
router.get('/landing', childcontroller.child_index);
router.get('/newchild', childcontroller.child_get);
router.get('/childprofile/:id', childcontroller.childprofile_get);
router.post("/newchild", childcontroller.child_post);


router.get('/parentprofile/:id', parentcontroller.parentprofile);








module.exports = router;