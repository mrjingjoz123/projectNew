const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportadminModel = new Schema({
    headname: {
        type: String,
        require: true,
    },
    bodytext: {
        type: String,
        require: true
    },
    username: [String]


});

const Reportadmin = mongoose.model('reportadmin', ReportadminModel, 'reportadmin');

module.exports = Reportadmin