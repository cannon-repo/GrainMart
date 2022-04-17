const Product = require("../Models/Product");

module.exports.getProductByCategory = async (req,res,next) => {
    const {category} = req.params;
    try {   
        const products = await Product.find({Category: category});
        res.status(200).json({products});
    } catch(err) {
        console.log('Error From getProductByCategory' + err);
        res.status(400).json({msg: 'Error from getProductByCategory', error: err});
    }
}

module.exports.getProductByProductId = async (req,res,next) => {
    const {ProductId} = req.params;
    try {
        const ProductFound = await Product.findOne({_id:ProductId});
        res.status(200).json({Product: ProductFound});
    } catch(err) {
        console.log('Error from getProductByProductId' + err);
        res.status(400).json({msg: 'Error from getProductByProductId', error: err});
    }
}