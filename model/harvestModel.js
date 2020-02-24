const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HarvestModel = new Schema({
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
    harvest: {
        type: Number,
        require: true
    },
    num: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    detail: {
        type: String,
    }
});

const Harvest = mongoose.model('harvest', HarvestModel, 'harvest');

module.exports = Harvest