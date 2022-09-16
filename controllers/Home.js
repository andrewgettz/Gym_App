const router = require('express').Router();
const childcontroller = require('../controllers/child')
const parentcontroller = require('../controllers/parent')
const { Parent, Child, User } = require("../models");




//login

router.get('/login', function (req, res) {
	
	res.render('login', {});
});



router.post("/login", (req, res) => {
    Parent.findOne({
        where: {
            email: req.body.username,
            password: req.body.password,
        },
    }).then((result) => {
        if (!result) {
            res.render("login", {message: 'Incorrect username or password!'});
           
           
            return;
        }


        req.session.save(() => {
            req.session.parentid = result.id;
            req.session.username = result.email;
            req.session.name = result.name_first;
            req.session.loggedIn = true;

            res.redirect('/landing');
            
        });
    });
});



router.delete('/', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send('Unable to log out')
            } else {
                res.send('Logout successful')
            }
        });
    } else {
        res.end()
    }
})

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