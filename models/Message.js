const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message_schema = new Schema({
    message: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Message', message_schema);