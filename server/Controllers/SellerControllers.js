const User = require("../Models/User");

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