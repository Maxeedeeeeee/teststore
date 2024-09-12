const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    ranks: [String]  // Stores the ranks assigned to the user
});

module.exports = mongoose.model('User', UserSchema);
