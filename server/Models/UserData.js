const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
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
    },
    Quantity: {
        type: Number,
        default: 1,
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
    Cart: [CartSchema]
});

const UserData = mongoose.model('UserData', UserDataSchema);

module.exports =  UserData;