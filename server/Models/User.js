const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    },
    IsSeller: {
        type: Boolean,
        default: false,
    },
    SellerName: {
        type: String,
        minlength: 3
    },
    SellerId: {
        type: String,
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;