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
    username: {
        type: Array
    }


});

const Reportadmin = mongoose.model('reportadmin', ReportadminModel, 'reportadmin');

module.exports = Reportadmin