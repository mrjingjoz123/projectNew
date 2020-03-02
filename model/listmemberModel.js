const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListmemberModel = new Schema({

    product: {
        type: String,
        require: true,
    },
    count: {
        type: Number,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    pay: {
        type: Number,
        require: true
    }
});

const Listmember = mongoose.model('listmember', ListmemberModel, 'listmember');
module.exports = Listmember