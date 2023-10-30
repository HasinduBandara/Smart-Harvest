const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['admin', 'user', 'seller', 'investor'] },
    gender: { type: String, gnum:['male', 'female'] },
});
const User = mongoose.model('User', userSchema);
module.exports = User