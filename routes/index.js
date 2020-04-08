var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const adminController = require('../controllers/adminController');
const memberController = require('../controllers/memberController');

//test
const Cultivate = require('../model/cultivateModel');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url2 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%AA%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%B0%E0%B8%A3%E0%B8%94/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url3 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%A2%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B8%B2/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url4 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%9B%E0%B8%B2%E0%B8%A5%E0%B9%8C%E0%B8%A1%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';
const url5 = 'https://www.kasetprice.com/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89';


// GET Login Page
router.route('/login').get(loginController.getLogin);
router.route('/presslogin').post(loginController.getHomepage);

// GET Register Page
router.route('/register').get(registerController.getRegister);
router.route('/saveRegister').post(registerController.saveRegister);

// GET Admin Page
router.route('/home').get(adminController.getHomepage);
router.route('/contact').get(adminController.getContactpage);
router.route('/list').get(adminController.getListpage);
router.route('/manager').get(adminController.getManagerpage);
router.route('/report').get(adminController.getReportpage);
router.route('/saveReportAdmin').post(adminController.saveReportAdmin);
router.route('/saveReportAdminSome/:user').post(adminController.saveReportAdminSome);

//ยังไม่ได้ใช้
router.route('/saveList').post(adminController.saveList);
router.route('/deleteList/:id').get(adminController.deleteList);


router.route('/deleteUser/:id').get(adminController.deleteUser);
router.route('/deleteMes/:id').get(adminController.deleteMes);
router.route('/saveEditUser/:id').post(adminController.saveEditUser);

// GET Member Page
router.route('/homemember').get(memberController.getHomepage);
router.route('/calcost').get(memberController.getCalcost);
router.route('/conclude').get(memberController.getConclude);
router.route('/contactfrommember').get(memberController.getContactfrommember);
router.route('/graph').get(memberController.getGraph);
router.route('/harvest').get(memberController.getHarvest);
router.route('/listmember').get(memberController.getListmember);
router.route('/record').get(memberController.getRecord);
router.route('/reportfrommember').get(memberController.getReportfrommember);
router.route('/saveContact/:user').post(memberController.saveContact);
router.route('/saveList/:user/:product').post(memberController.saveList);
router.route('/deleteListmember/:id').get(memberController.deleteList);
router.route('/updateList/:id').post(memberController.updateList);
router.route('/deleteReportmember/:id/:user').get(memberController.deleteReport);
router.route('/saveRecord/:id/:user').post(memberController.saveRecord);
router.route('/showRecord/:id/:product').get(memberController.showRecord);
router.route('/editRecord/:id/:product/:id2').post(memberController.editRecord);
router.route('/deleteRecord/:id/:product/:id2').get(memberController.deleteRecord);
router.route('/saveHarvest/:id/:user').post(memberController.saveHarvest);
router.route('/showHarvest/:id/:product').get(memberController.showHarvest);
router.route('/editHarvest/:id/:product/:id2').post(memberController.editHarvest);
router.route('/deleteHarvest/:id/:product/:id2').get(memberController.deleteHarvest);
router.route('/showConclude/:id/:product').get(memberController.showConclude);
router.route('/detailConclude/:id/:product').get(memberController.detailConclude);
router.route('/listNull').post(memberController.listNull);
//test
axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div > div.price-list-cost');
        var p = statsTable.text();
        if (p == '-') {
            console.log(p);
        } else {
            Cultivate.findOneAndUpdate({ name: 'อ้อยโรงงาน' }, { $set: { price: Number(p) } }, { new: true },
                (err) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                    return
                }
            );
        }
    })
    .catch(console.error);
axios(url2)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div:nth-child(1) > div.price-list-cost');
        var p = statsTable.text();
        if (p == '-') {
            console.log(p);
        } else {
            Cultivate.findOneAndUpdate({ name: 'สับปะรดสีทองเบอร์ใหญ่' }, { $set: { price: Number(p) } }, { new: true },
                (err) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                    return
                }
            );
        }
    })
    .catch(console.error);

axios(url3)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div:nth-child(2) > div.price-list-cost');
        var p = statsTable.text();
        if (p == '-') {
            console.log(p);
        } else {
            Cultivate.findOneAndUpdate({ name: 'น้ำยางพาราสด' }, { $set: { price: Number(p) } }, { new: true },
                (err) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                    return
                }
            );
        }
    })
    .catch(console.error);

axios(url4)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div > div.price-list-cost');
        var p = statsTable.text();
        if (p == '-') {
            console.log(p);
        } else {
            Cultivate.findOneAndUpdate({ name: 'ผลปาล์มน้ำมัน' }, { $set: { price: Number(p) } }, { new: true },
                (err) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                    return
                }
            );
        }
    })
    .catch(console.error);

axios(url5)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('#__layout > section > div:nth-child(3) > section:nth-child(1) > div > div > div.price-table-wrapper > div.price-table-list-wrapper > div:nth-child(3) > div.price-list-cost');
        var p = statsTable.text();
        if (p == '-') {
            console.log(p);
        } else {
            Cultivate.findOneAndUpdate({ name: 'ข้าวเจ้า' }, { $set: { price: Number(p) } }, { new: true },
                (err) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                    return
                }
            );
        }
    })
    .catch(console.error);




module.exports = router;