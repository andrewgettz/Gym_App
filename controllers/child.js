const router = require("express").Router();
const { child, User } = require("../../models");
const withAuth = require("../../utils/auth");




router.get("/", (req, res) => {
    child.findAll({
        order: [["created_at", "DESC"]],
        attributes: ["name_first", "name_last", "age", "gender", "allergies"],
        //include: [
        //    {
        //        model: User,
        //        attributes: ["username"],
        //    },
        //],
    })
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/", withAuth, (req, res) => {
    // check the session
    if (req.session) {
        child.create({
            name_first: req.body.name_first,
            name_last: req.body.name_last,
            // use the id from the session
            user_id: req.session.user_id,
        })
            .then((dbCommentData) => res.json(dbCommentData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});