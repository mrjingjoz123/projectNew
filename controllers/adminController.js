const Cultivate = require('../model/cultivateModel');
const User = require('../model/userModel');
const Reportadmin = require('../model/reportadminModel');
const Report = require('../model/reportModel');


module.exports = {

    getHomepage: async(req, res) => {
        res.render('pages/admin/home');
    },
    getContactpage: async(req, res) => {
        const list1 = await User.find();
        let list = new Array;
        for (let i = 0; i < list1.length; i++) {
            if (list1[i].username != 'admin') {
                list.push(list1[i]);
            }
        }
        var check = 0;
        res.render('pages/admin/contact', { list, check });
    },
    getListpage: async(req, res) => {
        var check = 0;
        const list = await Cultivate.find();
        res.render('pages/admin/list', { list, check });
    },
    getManagerpage: async(req, res) => {
        var check = 0;
        const list = await User.find();
        res.render('pages/admin/manager', { list, check });
    },
    getReportpage: async(req, res) => {
        var check = 0;
        const mes = await Report.find();
        res.render('pages/admin/report', { mes, check });
    },

    //ยังไม่ได้ใช้
    saveList: async(req, res) => {
        let list = new Cultivate({
            name: req.body.namelist,
            price: req.body.price,
            unit: req.body.unit,
            status: 'พร้อม'
        });
        // save to database
        list.save();
        res.redirect(req.get('referer'));
    },

    saveReportAdmin: async(req, res) => {
        const listz = await User.find();
        var username = new Array();
        for (let i = 0; i < listz.length; i++) {
            if (listz[i].username != 'admin') {
                username.push(listz[i].username);
            }
        }

        let mes = await new Reportadmin({
            headname: req.body.headname,
            bodytext: req.body.bodytext,
            username: username
        });
        // save to database
        mes.save();

        var check = 1;
        const list1 = await User.find();
        let list = new Array;
        for (let i = 0; i < list1.length; i++) {
            if (list1[i].username != 'admin') {
                list.push(list1[i]);
            }
        }
        res.render('pages/admin/contact', { list, check });
    },
    deleteUser: async(req, res) => {
        var id = req.params.id;
        await User.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return
        });
        var check = 2;
        const list = await User.find();
        res.render('pages/admin/manager', { list, check });

    },
    //ยังไม่ได้ใช้
    deleteList: async(req, res) => {
        var id = req.params.id;
        await Cultivate.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return
        });
        var check = 1;
        const list = await Cultivate.find();
        res.render('pages/admin/list', { list, check });

    },
    deleteMes: async(req, res) => {
        var id = req.params.id;
        await Report.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return
        });
        var check = 1;
        const mes = await Report.find();
        res.render('pages/admin/report', { mes, check });
    },
    saveEditUser: async(req, res) => {
        await User.findByIdAndUpdate(req.params.id, req.body, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        var check = 1;
        const list = await User.find();
        res.render('pages/admin/manager', { list, check });
    },
    saveReportAdminSome: async(req, res) => {
        var id = req.params.user;
        var s = id
        var matches = ['']
        var open = false
        for (i in s) {
            if (s[i] == ',' && !open) {
                matches.push('')

            } else {
                matches[matches.length - 1] += s[i]
            }
        }

        let mes = await new Reportadmin({
            headname: req.body.headname,
            bodytext: req.body.bodytext,
            username: matches

        });
        // // save to database
        mes.save();

        var check = 1;
        const list1 = await User.find();
        let list = new Array;
        for (let i = 0; i < list1.length; i++) {
            if (list1[i].username != 'admin') {
                list.push(list1[i]);
            }
        }
        res.render('pages/admin/contact', { list, check });
    }



}