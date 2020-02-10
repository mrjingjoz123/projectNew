const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportModel = new Schema({
    headname: {
        type: String,
        require: true,
    },
    bodytext: {
        type: String,
        require: true
    },
    doctype: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    }
});

const Report = mongoose.model('report', ReportModel, 'report');

module.exports = Report