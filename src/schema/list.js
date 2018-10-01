const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: String,
    price: Number,
    tao_token: String,
    coupon_tao_token: String,
    url: String,
    image_urls: Array,
    create_time: Date,
    update_time: Date,
})

module.exports = mongoose.model('lists', listSchema);