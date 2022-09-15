const router = require('express').Router();
const passport = require("passport");
const LocalStrategy = require('passport-local');
const childcontroller = require('../controllers/child')
const parentcontroller = require('../controllers/parent')
const logincontroller = require('../controllers/login')
const { Parent, Child, User } = require("../models");



//parents
router.get('/newparent', parentcontroller.parent_get);
router.post("/newparent", parentcontroller.parent_post)
router.get('/parentprofile:id', parentcontroller.parent_get);

//child
router.post("/newchild", childcontroller.child_post);
router.get('/', childcontroller.child_index);
router.get('/newchild', childcontroller.child_get);
router.get('/childprofile', childcontroller.childprofile_get);
router.get('/schedulechild', childcontroller.childschedule_get);
router.get('/schedulechild', childcontroller.childschedule_post);



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
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.email;
            req.session.loggedIn = true;

            res.redirect('/');
            
        });
    });
});











module.exports = router;