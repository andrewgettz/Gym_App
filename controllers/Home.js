const router = require('express').Router();

const childcontroller = require('../controllers/child')
const parentcontroller = require('../controllers/parent')
const logincontroller = require('../controllers/login')




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
router.get("/login", logincontroller.strategy);
/*router.get('/login', logincontroller.child_index);*/







module.exports = router;