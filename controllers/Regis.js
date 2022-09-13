const Parent = require('../models/parent');

const parent_index = (req, res) => {
    Parent.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('newparent', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}


module.exports = {
    parent_index,


}