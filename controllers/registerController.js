const User = require('../model/userModel');

module.exports = {
    getRegister: async(req, res) => {
        res.render('pages/register');
    },

    saveRegister: async(req, res) => {
        let user = new User({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            birthday: req.body.birthday,
            province: req.body.province,
            district: req.body.district,
            doctype: "member"
        });
        // save to database
        user.save();

        res.render('pages/login');
    }

}