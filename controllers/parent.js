const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('newparent', {});
});





module.exports = router;