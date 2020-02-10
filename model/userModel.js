const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    birthday: {
        type: Date,
        require: true
    },
    province: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    doctype: {
        type: String
    }
});

const Username = mongoose.model('user', UserModel, 'user');
module.exports = Username