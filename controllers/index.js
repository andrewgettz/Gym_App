const router = require("express").Router();


const mainRoutes = require("./home");


router.use("/", mainRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
