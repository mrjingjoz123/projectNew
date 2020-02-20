const Report = require('../model/reportModel');
const Reportadmin = require('../model/reportadminModel');
const Listmember = require('../model/listmemberModel');
const Cultivate = require('../model/cultivateModel');

module.exports = {

    getHomepage: async(req, res) => {
        res.render('pages/member/homemember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },

    getCalcost: async(req, res) => {
        res.render('pages/member/calcost');
    },
    getConclude: async(req, res) => {
        res.render('pages/member/conclude');
    },
    getContactfrommember: async(req, res) => {
        res.render('pages/member/contactfrommember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getGraph: async(req, res) => {
        res.render('pages/member/graph');
    },
    getHarvest: async(req, res) => {
        res.render('pages/member/harvest');
    },
    getListmember: async(req, res) => {
        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });

        res.render('pages/member/listmember', { listmember, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getRecord: async(req, res) => {
        res.render('pages/member/record');
    },
    getReportfrommember: async(req, res) => {
        const check = await Reportadmin.find();
        let mesh = new Array;
        let mesb = new Array;
        let mesi = new Array;
        for (let i = 0; i < check.length; i++) {
            if (check[i].username.length == 0) {
                Reportadmin.findByIdAndRemove(check[i].id, (err) => {
                    if (err) return res.status(500).send(err);
                    return;
                });
            }
        }
        for (let i = 0; i < check.length; i++) {
            for (let j = 0; j < check[i].username.length; j++) {
                if (username === check[i].username[j]) {
                    mesi.push(check[i].id);
                    mesh.push(check[i].headname);
                    mesb.push(check[i].bodytext);
                }
            }
        }
        res.render('pages/member/reportfrommember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype, mesh, mesb, mesi });
    },
    saveContact: async(req, res) => {

        let mes = await new Report({
            headname: req.body.headname,
            bodytext: req.body.bodytext,
            doctype: 'member',
            username: req.params.user
        });
        mes.save();
        res.redirect(req.get('referer'));
    },
    saveList: async(req, res) => {
        let user = req.params.user;
        let product = req.params.product;
        let lismember = new Listmember({
            product: product,
            count: req.body.num,
            user: user
        });
        // save to database
        lismember.save();

        res.redirect(req.get('referer'));
    },
    deleteList: async(req, res) => {
        var id = req.params.id;
        Listmember.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    },
    updateList: async(req, res) => {
        let id = req.params.id;
        let num = req.body.num2;
        console.log(id);
        console.log(num);


        Listmember.findByIdAndUpdate(req.params.id, { count: num }, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });
        res.redirect(req.get('referer'));
        res.render('pages/member/listmember', { listmember, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });


    },
    deleteReport: async(req, res) => {
        let user = req.params.user;


        Reportadmin.findByIdAndUpdate(req.params.id, { $pull: { username: { $in: [user] } } }, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        const check = await Reportadmin.find();
        let mesh = new Array;
        let mesb = new Array;
        let mesi = new Array;
        for (let i = 0; i < check.length; i++) {
            if (check[i].username.length == 0) {
                Reportadmin.findByIdAndRemove(check[i].id, (err) => {
                    if (err) return res.status(500).send(err);
                    return;
                });
            }
        }
        for (let i = 0; i < check.length; i++) {
            for (let j = 0; j < check[i].username.length; j++) {
                if (username === check[i].username[j]) {
                    mesi.push(check[i].id);
                    mesh.push(check[i].headname);
                    mesb.push(check[i].bodytext);
                }
            }
        }
        res.redirect(req.get('referer'));
        res.render('pages/member/reportfrommember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype, mesh, mesb, mesi });



    }

}