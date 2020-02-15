var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const adminController = require('../controllers/adminController');
const memberController = require('../controllers/memberController');



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











module.exports = router;