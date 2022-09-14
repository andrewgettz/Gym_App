const router = require('express').Router();
const { Parent, Child, User } = require("../models");
const childcontroller = require('../controllers/child')
const parentcontroller = require('../controllers/parent')



//parents
router.get('/newparent', parentcontroller.parent_get);
router.post("/newparent", parentcontroller.parent_post)
router.get('/parentprofile', parentcontroller.parent_get);

//child
router.post("/newchild", childcontroller.child_post);
router.get('/', childcontroller.child_index);
router.get('/newchild', childcontroller.child_get);
router.get('/childprofile', childcontroller.childprofile_get);
router.get('/schedulechild', childcontroller.childschedule_get);
router.get('/schedulechild', childcontroller.childschedule_post);






module.exports = router;