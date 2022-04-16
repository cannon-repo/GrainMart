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