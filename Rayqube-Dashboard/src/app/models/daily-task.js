const mongoose = require('mongoose');

var dailyWorkSchema = new mongoose.Schema({
    workdetails: {
        type: Array,
        required: 'This field is required.'
    },
    date: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
});

module.exports = mongoose.model('dailytask', dailyWorkSchema, 'dailytask');
