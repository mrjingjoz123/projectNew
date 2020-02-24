const Report = require('../model/reportModel');
const Reportadmin = require('../model/reportadminModel');
const Listmember = require('../model/listmemberModel');
const Cultivate = require('../model/cultivateModel');
const Record = require('../model/recordModel');
const Harvest = require('../model/harvestModel');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url2 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%AA%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%B0%E0%B8%A3%E0%B8%94/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url3 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%A2%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B8%B2/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url4 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%9B%E0%B8%B2%E0%B8%A5%E0%B9%8C%E0%B8%A1%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url5 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
// const url6 = '';

module.exports = {

    getHomepage: async(req, res) => {
        res.render('pages/member/homemember', { username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },

    getCalcost: async(req, res) => {
        axios(url)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html)
                const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div > div.price-list-cost');
                var p = statsTable.text();
                Cultivate.findOneAndUpdate({ name: 'อ้อยโรงงาน' }, { $set: { price: Number(p) } }, { new: true },
                    (err) => {
                        if (err) return res.status(500).send(err);
                        return
                    }
                );
            })
            .catch(console.error);
        axios(url2)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html)
                const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div:nth-child(1) > div.price-list-cost');
                var p = statsTable.text();
                Cultivate.findOneAndUpdate({ name: 'สับปะรดสีทองเบอร์ใหญ่' }, { $set: { price: Number(p) } }, { new: true },
                    (err) => {
                        if (err) return res.status(500).send(err);
                        return
                    }
                );
            })
            .catch(console.error);

        axios(url3)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html)
                const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div:nth-child(2) > div.price-list-cost');
                var p = statsTable.text();
                Cultivate.findOneAndUpdate({ name: 'น้ำยางพาราสด' }, { $set: { price: Number(p) } }, { new: true },
                    (err) => {
                        if (err) return res.status(500).send(err);
                        return
                    }
                );
            })
            .catch(console.error);

        axios(url4)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html)
                const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div > div.price-list-cost');
                var p = statsTable.text();
                Cultivate.findOneAndUpdate({ name: 'ผลปาล์มน้ำมัน' }, { $set: { price: Number(p) } }, { new: true },
                    (err) => {
                        if (err) return res.status(500).send(err);
                        return
                    }
                );
            })
            .catch(console.error);

        axios(url5)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html)
                const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div:nth-child(3) > div.price-list-cost');
                var p = statsTable.text();
                Cultivate.findOneAndUpdate({ name: 'ข้าวเจ้า' }, { $set: { price: Number(p) } }, { new: true },
                    (err) => {
                        if (err) return res.status(500).send(err);
                        return
                    }
                );
            })
            .catch(console.error);

        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });

        res.render('pages/member/calcost', { list, listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
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

        const listmember = await Listmember.find({ user: username });
        res.render('pages/member/harvest', { listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getListmember: async(req, res) => {
        const list = await Cultivate.find();
        const listmember = await Listmember.find({ user: username });

        res.render('pages/member/listmember', { listmember, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });
    },
    getRecord: async(req, res) => {
        // const listrecord = await Record.find({ username: username });
        const listmember = await Listmember.find({ user: username });
        res.render('pages/member/record', { listmember, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

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
        record.save();
        res.redirect(req.get('referer'));
    },
    showRecord: async(req, res) => {
        var id = req.params.id;
        var product = req.params.product;
        const list = await Record.find({ idlist: id });


        res.render('pages/member/showrecord', { product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    editRecord: async(req, res) => {
        Record.findByIdAndUpdate(req.params.id, req.body, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        res.redirect(req.get('referer'));

    },
    deleteRecord: async(req, res) => {
        var id = req.params.id;
        Record.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
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
        harvest.save();
        res.redirect(req.get('referer'));
    },
    showHarvest: async(req, res) => {
        var id = req.params.id;
        var product = req.params.product;
        const list = await Harvest.find({ idlist: id });

        res.render('pages/member/showharvest', { product, list, username, password, firstname, lastname, email, phone, birthday, province, district, doctype });

    },
    editHarvest: async(req, res) => {
        Harvest.findByIdAndUpdate(req.params.id, req.body, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        res.redirect(req.get('referer'));

    },
    deleteHarvest: async(req, res) => {
        var id = req.params.id;
        Harvest.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    }

}