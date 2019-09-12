const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }
});

const Members = mongoose.model('Member',memberSchema);

module.exports = Members;