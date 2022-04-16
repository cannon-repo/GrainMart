const mongoose = require("mongoose");

const ProductIdSchema = new mongoose.Schema({
    ProductId: {
        type: String,
        required: true,
    }
});

const ProductSchema = new mongoose.Schema({
    SellerId: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    Offer: {
        type: Number,
        default: 0,
    },
    Image: {
        type: String,
        required: true,
    },
    ProductId: {
        type: String,
        required: true,
    }
});

const UserDataSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
    Wishlist: [ProductSchema],
    Cart: [ProductIdSchema]
});

const UserData = mongoose.model('UserData', UserDataSchema);

module.exports =  UserData;