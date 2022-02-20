const mongoose = require("mongoose");

const User = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true,
        unique: true
    },
    Pwd: {
        type: String,
        required: true,
        minlength: 8
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;