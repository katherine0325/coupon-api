const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: String,
    tToken: String,
    url: String,
    imageUrl: String,
})

module.exports = mongoose.model('lists', listSchema);