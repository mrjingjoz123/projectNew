const Cultivate = require('../model/cultivateModel');
const User = require('../model/userModel');
const Reportadmin = require('../model/reportadminModel');
const Report = require('../model/reportModel');
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
        res.render('pages/admin/home');
    },
    getContactpage: async(req, res) => {
        const list = await User.find();
        res.render('pages/admin/contact', { list });
    },
    getListpage: async(req, res) => {
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
        res.render('pages/admin/list', { list });
    },
    getManagerpage: async(req, res) => {
        const list = await User.find();
        res.render('pages/admin/manager', { list });
    },
    getReportpage: async(req, res) => {
        const mes = await Report.find();
        res.render('pages/admin/report', { mes });
    },
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
        const list = await User.find();
        var username = new Array();
        for (let i = 0; i < list.length; i++) {
            username.push(list[i].username);
        }

        let mes = await new Reportadmin({
            headname: req.body.headname,
            bodytext: req.body.bodytext,
            username: username
        });
        // save to database
        mes.save();
        res.redirect(req.get('referer'));
    },
    deleteUser: async(req, res) => {
        var id = req.params.id;
        User.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    },
    deleteList: async(req, res) => {
        var id = req.params.id;
        Cultivate.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    },
    deleteMes: async(req, res) => {
        var id = req.params.id;
        Report.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    },
    saveEditUser: async(req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        const list = await User.find();
        res.render('pages/admin/manager', { list });
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
        res.redirect(req.get('referer'));
    }



}