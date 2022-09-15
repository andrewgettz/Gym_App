const { Parent, Child, User } = require("../models");







const parent_get = (req, res) => {
    res.render('newparent', {});

};

const parentprofile = (req, res) => {
    const id = req.params.id;
   
    Parent.findByPk(id)
        .then(result => {
            console.log(result)
            res.render('parentprofile', {
                result: result.toJSON()
            });

        })
};


const parent_post = (req, res) => {

    console.log(req.body);

    Parent.create({
        name_first: req.body.name_first,
        name_last: req.body.name_last,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
    })
        .then(res.redirect('/login'))

        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
       



}
module.exports = {
    parent_post,
    parent_get,
    parentprofile
}