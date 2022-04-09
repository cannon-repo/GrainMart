const mongoose = require("mongoose");

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
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;