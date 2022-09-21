const router = require("express").Router();


const mainRoutes = require("./Home");


router.use("/", mainRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
