const User = require('../model/userModel');


module.exports = {
    getLogin: async(req, res) => {
        res.render('pages/login', {
            username: "Username",
            password: "Password"
        });
    },
    getHomepage: async(req, res) => {
        User.findOne({ username: req.body.username }).exec(function(err, person) {
            if (err) console.log(err);
            if (person) {
                if (person.password == req.body.password) {

                    if (person.doctype == "admin") {
                        username = person.username,
                            password = person.password,
                            firstname = person.firstname,
                            lastname = person.lastname,
                            email = person.email,
                            phone = person.phone,
                            birthday = person.birthday,
                            province = person.province,
                            district = person.district,
                            doctype = "admin"
                        res.render("pages/admin/home", { username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
                    } else if (person.doctype == "member") {
                        username = person.username,
                            password = person.password,
                            firstname = person.firstname,
                            lastname = person.lastname,
                            email = person.email,
                            phone = person.phone,
                            birthday = person.birthday,
                            province = person.province,
                            district = person.district,
                            doctype = "member"
                        res.render("pages/member/homemember", { username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
                    }
                } else {
                    // res.render("pages/login", { result: 'รหัสผ่านไม่ถูกต้อง' });
                }
            } else {
                // res.render("pages/login", { result: 'ไม่พบข้อมูลผู้ใช้' });
            }
        });
    }
}