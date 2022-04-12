const User = require("../Models/User");
const Product = require("../Models/Product");

module.exports.postSellerRegister = async (req,res) => {
    const {SellerName, SellerId, UserId} = req.body;
    try {
        const userExists = await User.findOne({UserId});
        if(userExists) {
            const sellerExists = await User.findOne({SellerId});
            if(sellerExists) {
                return res.status(400).json({success: false, msg: 'Seller already exists'});
            } else {
                await userExists.updateOne({IsSeller: true, SellerName, SellerId});
            }
        } else {
            return res.status(400).json({success: false, msg: 'User doesnt exists'});
        }
        res.status(200).json({success: true, msg: 'Seller registered'});
    } catch(err) {
        console.log(err);
        res.status(400).json({success: false, msg: 'Error from postSellerRegister'});
    }
}

module.exports.addProductData = async (req,res,next) => {
    const {SellerId, Name, Category, Price, Offer} = req.body;
    const Image = req.file.filename;
    try {
        const data = {
            SellerId, Name, Category, Price, Offer, Image
        };
        const savedProd = await Product.create(data);
        res.status(200).json({msg: 'Product successfully added', data: savedProd});
    } catch(err) {
        console.log(err);
        res.status(400).json('Error' + err);
    }
}

module.exports.getMyProducts = async (req,res,next) => {
    const {Name} = req.body;
    try {
        const myProds = await Product.find({SellerId: Name});
        res.status(200).json({msg: 'Seller Product Fetch Successful', data: myProds });
    } catch (err) {
        console.log(err);
        res.status(400).json('Error' + err);
    }
}