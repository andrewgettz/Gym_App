const express = require('express');
const regcontrol = require('../controllers/Regis')
const router = express.Router();
router.get('/newparent', regcontrol.parent_index);
/*router.get('/login', loginView);*/
module.exports = router;