const router = require("express").Router();


const homeRoutes = require("./home");
/*const dashboardRoutes = require("./dashboard-routes");*/


router.use("/", homeRoutes);
/*router.use("/dashboard", dashboardRoutes);*/

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
