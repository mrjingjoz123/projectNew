const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordModel = new Schema({
    username: {
        type: String,
        require: true
    },
    idlist: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true,
    },
    count: {
        type: Number,
        require: true
    },
    power: {
        type: Number,
        require: true
    },
    material: {
        type: Number,
        require: true
    },
    detail: {
        type: String,
    }
});

const Record = mongoose.model('record', RecordModel, 'record');

module.exports = Record