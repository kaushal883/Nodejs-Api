const mongoose = require('mongoose'); // ✅ required

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number
});

const userModels = mongoose.model('users', userSchema);
module.exports = userModels;
