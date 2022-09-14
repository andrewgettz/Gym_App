const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {});
});

router.get('/newparent', (req, res) => {
    res.render('newparent', {});
});

//router.get('/newchild', (req, res) => {
//    res.render('newchild', {});
//});

//router.get('/parentprofile', (req, res) => {
//    res.render('parentprofile', {});
//});




module.exports = router;