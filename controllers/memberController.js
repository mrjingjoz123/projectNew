const Report = require('../model/reportModel');
const Reportadmin = require('../model/reportadminModel');
const Listmember = require('../model/listmemberModel');
const Cultivate = require('../model/cultivateModel');
const Record = require('../model/recordModel');
const Harvest = require('../model/harvestModel');


module.exports = {

    getHomepage: async(req, res) => {
        res.render('pages/member/homemember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },

    getCalcost: async(req, res) => {
        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });
        res.render('pages/member/calcost', { list, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },

    getConclude: async(req, res) => {
        const record = await Record.find({ username: username });
        const harvest = await Harvest.find({ username: username });
        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });
        var check = 0;
        res.render('pages/member/conclude', { check, record, harvest, list, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    getContactfrommember: async(req, res) => {
        var check = 0;
        res.render('pages/member/contactfrommember', { check, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getGraph: async(req, res) => {
        const list = await Cultivate.find();
        res.render('pages/member/graph', { list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getHarvest: async(req, res) => {
        var check = 0;
        const listmember = await Listmember.find({ user: username });
        res.render('pages/member/harvest', { check, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getListmember: async(req, res) => {
        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });
        var check = 0;
        res.render('pages/member/listmember', { check, listmember, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getRecord: async(req, res) => {
        var check = 0;
        const listmember = await Listmember.find({ user: username });
        res.render('pages/member/record', { check, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

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
        let test = 0;
        res.render('pages/member/reportfrommember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype, mesh, mesb, mesi, test });
    },
    saveContact: async(req, res) => {

        let mes = new Report({
            headname: req.body.headname,
            bodytext: req.body.bodytext,
            doctype: 'member',
            username: req.params.user
        });
        await mes.save();
        let check = 1;
        res.render('pages/member/contactfrommember', { check, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    saveList: async(req, res) => {
        let user = req.params.user;
        let product = req.params.product;
        let lismember = new Listmember({
            product: product,
            count: req.body.num,
            user: user,
            pay: req.body.pay
        });
        // save to database
        await lismember.save();

        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });
        var check = 1;
        res.render('pages/member/listmember', { check, listmember, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    deleteList: async(req, res) => {
        var id = req.params.id;
        await Listmember.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return
        });
        await Record.find({ idlist: id }).remove().exec();
        await Harvest.find({ idlist: id }).remove().exec();

        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });
        var check = 2;
        res.render('pages/member/listmember', { check, listmember, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    updateList: async(req, res) => {
        let num = req.body.num2;
        let pay = req.body.pay2;
        await Listmember.findByIdAndUpdate(req.params.id, { count: num, pay: pay }, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });
        var check = 3;
        res.render('pages/member/listmember', { check, listmember, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });


    },
    deleteReport: async(req, res) => {
        let user = req.params.user;
        await Reportadmin.findByIdAndUpdate(req.params.id, { $pull: { username: { $in: [user] } } }, { new: true },
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
        let test = 1;
        res.render('pages/member/reportfrommember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype, mesh, mesb, mesi, test });

    },
    saveRecord: async(req, res) => {
        var id = req.params.id;
        var user = req.params.user;
        var day = Date.now();
        let record = new Record({
            username: user,
            idlist: id,
            date: day,
            count: req.body.count,
            power: req.body.power,
            material: req.body.material,
            detail: req.body.detail
        });
        // save to database
        await record.save();

        var check = 1;
        const listmember = await Listmember.find({ user: username });
        res.render('pages/member/record', { check, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    showRecord: async(req, res) => {
        var id = req.params.id;
        var product = req.params.product;
        const list = await Record.find({ idlist: id });
        var check = 0;
        res.render('pages/member/showrecord', { id, check, product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    editRecord: async(req, res) => {
        await Record.findByIdAndUpdate(req.params.id, req.body, { new: true },
            (err) => {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    return
                }
            }
        );
        var id = req.params.id2;
        var product = req.params.product;
        const list = await Record.find({ idlist: id });
        var check = 1;
        res.render('pages/member/showrecord', { id, check, product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    deleteRecord: async(req, res) => {
        var id0 = req.params.id;
        await Record.findByIdAndRemove(id0, (err) => {
            if (err) return res.status(500).send(err);
            return
        });
        var id = req.params.id2;
        var product = req.params.product;
        const list = await Record.find({ idlist: id });
        var check = 2;
        res.render('pages/member/showrecord', { id, check, product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });


    },
    saveHarvest: async(req, res) => {
        var id = req.params.id;
        var user = req.params.user;
        var day = Date.now();
        let harvest = new Harvest({
            username: user,
            idlist: id,
            date: day,
            count: req.body.count,
            harvest: req.body.harvest,
            num: req.body.num,
            price: req.body.price,
            detail: req.body.detail
        });
        // save to database
        await harvest.save();
        var check = 1;
        const listmember = await Listmember.find({ user: username });
        res.render('pages/member/harvest', { check, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    showHarvest: async(req, res) => {
        var id = req.params.id;
        var product = req.params.product;
        const list = await Harvest.find({ idlist: id });
        var check = 0;
        res.render('pages/member/showharvest', { id, check, product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    editHarvest: async(req, res) => {
        await Harvest.findByIdAndUpdate(req.params.id, req.body, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        var id = req.params.id2;
        var product = req.params.product;
        const list = await Harvest.find({ idlist: id });
        var check = 1;
        res.render('pages/member/showharvest', { id, check, product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });


    },
    deleteHarvest: async(req, res) => {
        var id0 = req.params.id;
        await Harvest.findByIdAndRemove(id0, (err) => {
            if (err) return res.status(500).send(err);
            return
        });
        var id = req.params.id2;
        var product = req.params.product;
        const list = await Harvest.find({ idlist: id });
        var check = 2;
        res.render('pages/member/showharvest', { id, check, product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    showConclude: async(req, res) => {
        var id = req.params.id;
        var product = req.params.product;

        const x = await Record.find({ idlist: id });
        const y = await Harvest.find({ idlist: id });
        const z = await Listmember.find({ _id: id });
        if ((x.length == 0 && y.length == 0) || (x.length == 0 || y.length == 0)) {
            const record = await Record.find({ username: username });
            const harvest = await Harvest.find({ username: username });
            const list = await Cultivate.find();
            const listmember = await Listmember.find({ user: username });
            var check = 1;
            res.render('pages/member/conclude', { check, record, harvest, list, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
        } else {
            var n = z[0].count;
            var pay = z[0].pay;
            var dayO = new Date(x[0].date);
            var dayN = new Date(y[y.length - 1].date);
            let dateOld = dayO.toISOString().replace(/T/).substr(0, 10);
            let dateNew = dayN.toISOString().replace(/T/).substr(0, 10);

            let sum = 0;
            let sum2 = 0;
            for (let i = 0; i < x.length; i++) {
                sum = sum + x[i].power + x[i].material;

            }
            for (let i = 0; i < y.length; i++) {
                sum2 = sum2 + (y[i].num * y[i].price);
                sum = sum + y[i].harvest;

            }
            sum = sum + (pay * n);
            let fsum = sum / n;
            let fsum2 = sum2 / n;
            let fsum3 = sum2 - sum;
            let fsum4 = fsum3 / n;
            res.render('pages/member/showconclude', { sum, sum2, fsum, fsum2, fsum3, fsum4, dateNew, dateOld, product, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

        }
    },
    detailConclude: async(req, res) => {
        var id = req.params.id;
        var product = req.params.product;
        const x = await Record.find({ idlist: id });
        const y = await Harvest.find({ idlist: id });
        const z = await Listmember.find({ _id: id });
        if ((x.length == 0 && y.length == 0) || (x.length == 0 || y.length == 0)) {
            const record = await Record.find({ username: username });
            const harvest = await Harvest.find({ username: username });
            const list = await Cultivate.find();
            const listmember = await Listmember.find({ user: username });
            var check = 1;
            res.render('pages/member/conclude', { check, record, harvest, list, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
        } else {
            var n = z[0].count;
            var dayO = new Date(x[0].date);
            var dayN = new Date(y[y.length - 1].date);
            let dateOld = dayO.toISOString().replace(/T/).substr(0, 10);
            let dateNew = dayN.toISOString().replace(/T/).substr(0, 10);

            let pow = 0;
            let mat = 0;
            let num = 0;
            let sell = 0;
            let pay = z[0].pay;
            for (let i = 0; i < x.length; i++) {
                pow = pow + x[i].power;
                mat = mat + x[i].material;
            }
            for (let i = 0; i < y.length; i++) {
                pow = pow + y[i].harvest;
                num = num + y[i].num;
                sell = sell + (y[i].num * y[i].price);
            }
            let fpow = pow / n;
            let fmat = mat / n;
            let fnum = num / n;
            let fsell = sell / n;
            let fpay = pay * n;

            res.render('pages/member/detailconclude', { pay, fpay, pow, mat, num, sell, fpow, fmat, fnum, fsell, dateNew, dateOld, product, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
        }
    }

}