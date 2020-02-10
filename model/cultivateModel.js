const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CultivateModel = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    unit: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
});

const Cultivate = mongoose.model('cultivate', CultivateModel, 'cultivate');
module.exports = Cultivate