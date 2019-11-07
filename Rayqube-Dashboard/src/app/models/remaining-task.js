const mongoose = require('mongoose');

var remaining = new mongoose.Schema({
    remaining: {
        type: Array,
        required: 'This field is required.'
    }
});

module.exports = mongoose.model('remainingtask', remaining, 'remainingtask');
