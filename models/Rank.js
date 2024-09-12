const mongoose = require('mongoose');

const RankSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Rank', RankSchema);
