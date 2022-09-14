const { Schedule, Child, Parent } = require("../models");




const child_index = (req, res) => {
    Child.findAll({
        include: [
            {
                model: Parent,
                attributes: ["id"],
            },
        ],


    })
        .then((result) => {
            res.render('index', {});
        })
        .catch((err) => {

            console.log(err);
        })
};
const child_get = (req, res) => {
    res.render('newchild', {});

};


const childprofile_get = (req, res) => {
    res.render('childprofile', {});

};

const childschedule_get = (req, res) => {
    res.render('schedulechild', {});

};

const child_post = (req, res) => {

    console.log(req.body);

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

    })

        .then(res.redirect('/'));



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
     child_index
}