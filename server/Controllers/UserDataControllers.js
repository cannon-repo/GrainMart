const UserData = require("../Models/UserData");

module.exports.addUserWishlistItems = async (req,res,next) => {
    const {UserId, ProductId, SellerId, Category, Name, Price, Offer, Image} = req.body;
    console.log('Reached', UserId, ProductId);
    try {   
        const product = {ProductId, SellerId, Category, Name, Price, Offer, Image};
        const updatedWishlist = await UserData.findOneAndUpdate({UserId}, {$push: {Wishlist: product}}, {new: true, safe: true, upsert: true});
        console.log(updatedWishlist);
        res.status(200).json({msg: 'Added to wishlist', data: updatedWishlist});
    } catch(err) {
        console.log('Error from addUserWishlist' + err);
        res.status(400).json('Error' + err);
    }
}

module.exports.addUserCartItems = async (req,res,next) => {
    const {UserId, ProductId, SellerId, Category, Name, Price, Offer, Image} = req.body;
    console.log('Reached', UserId, ProductId);
    try {   
        const product = {ProductId, SellerId, Category, Name, Price, Offer, Image};
        const updatedCart = await UserData.findOneAndUpdate({UserId}, {$push: {Cart: product}}, {new: true, safe: true, upsert: true});
        console.log(updatedCart);
        res.status(200).json({msg: 'Added to cart', data: updatedCart});
    } catch(err) {
        console.log('Error from addUserWishlist' + err);
        res.status(400).json('Error' + err);
    }
}

module.exports.deleteUserWishlistItems = async (req,res,next) => {
    const {UserId, ProductId} = req.body;
    try {
        const updatedWishllist = await UserData.findOneAndUpdate({UserId}, {
            $pull: {
                'Wishlist': {ProductId}
            }
        });
        res.status(200).json({msg: 'removed item from wishlist', data: updatedWishllist.Wishlist});
    } catch(err) {
        console.log('Error from deleteUserWishlistItems' + err);
        res.status(400).json('Error from deleteUserWishlistItems' + err);
    }
}

module.exports.deleteUserCartItems = async (req,res,next) => {
    const {UserId, ProductId} = req.body;
    try {
        const updatedCart = await UserData.findOneAndUpdate({UserId}, {
            $pull: {
                'Cart': {ProductId}
            }
        });
        res.status(200).json({msg: 'removed item from cart', data: updatedCart});
    } catch(err) {
        console.log('Error from deleteUserCart' + err);
        res.status(400).json({msg: 'Error from deleteUserCart' + err});
    }
}

module.exports.updateCartProductQty = async (req,res,next) => {
    const {UserId, ProductId, Quantity} = req.body;
    console.log(ProductId, Quantity);
    try {
        const updatedCart = await UserData.findOneAndUpdate({UserId, 'Cart.ProductId' : ProductId}, {
            $set: {
                'Cart.$.Quantity': Quantity
            }
        });
        res.status(200).json({msg: 'updated product quantity', data: updatedCart});
    } catch(err) {
        console.log('Error from updateCartProductQty' + err);
        res.status(400).json('Error from updateCartProductQty' + err);
    }
}

module.exports.getUserWishlist =  async(req,res,next) => {
    const {UserId} = req.params;
    try {
        const userWishlist = await UserData.findOne({UserId});
        res.json({msg: 'Wishlist Fetched Successfully', data: userWishlist.Wishlist});
    } catch (err) {
        console.log('Error from getUserWishlist');
        res.status(400).json({msg: 'Error from getUserWishlist' + err});
    } 
}

module.exports.getUserCart = async (req,res,next) => {
    const {UserId} = req.params;
    try {
        const userCart = await UserData.findOne({UserId});
        res.json({msg: 'Cart Fetched Successfully', data: userCart.Cart});
    } catch (err) {
        console.log('Error from getUserCart');
        res.status(400).json('Error from getUserCart' + err);
    } 
}