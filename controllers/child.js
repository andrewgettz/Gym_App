const { Schedule, Child, Parent } = require("../models");



const index = (req, res) => {
    res.render('index', { ParentID: req.session.parentid, });

};
const child_index = (req, res) => {
    const parentid = req.session.parentid;
    Child.findAll({
        where: {
            ParentId: parentid,
        },
        raw: true

    })
        .then(result => {
           
            res.render('landing', { result: result,loggedIn: req.session.loggedIn, firstname: req.session.name, PID: req.session.parentid });
        })
        .catch(err => {

            console.log(err);
        })
};
const child_get = (req, res) => {
    res.render('newchild', { ParentID: req.session.parentid, });

};


const childprofile_get = (req, res) => {
    const id = req.params.id;

    Child.findByPk(id)
        .then(result => {
            
            res.render('childprofile', {
                result: result.toJSON()
            });

        })
};

const childschedule_get = (req, res) => {
    res.render('schedulechild', {});

};

const child_post = (req, res) => {

   

    Child.create({
        name_first: req.body.name_first,
        name_last: req.body.name_last,
        age: req.body.age,
        gender: req.body.gender,
        allergies: req.body.allergies,
        dietRestrictions: req.body.dietRestrictions,
        notes: req.body.notes,
        photoLink: req.body.photoLink,
        ParentId: req.body.ParentId,
        monday: req.body.monday,
        tuesday: req.body.tuesday,
        wednesday: req.body.wednesday,
        thursday: req.body.thursday,
        friday: req.body.friday

    })

        .then(res.redirect('/landing'));



}



const childschedule_post = (req, res) => {

    console.log(req.body);

    Schedule.create({
        monday: req.body.monday,
        tuesday: req.body.tuesday,
        wednesday: req.body.wednesday,
        thursday: req.body.thursday,
        friday: req.body.friday,
     

    })

        .then(res.redirect('/'));



}




module.exports ={
    child_post,
    child_get,
    childprofile_get,
    childschedule_get,
    childschedule_post,
    child_index,
    index
}