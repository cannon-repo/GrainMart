const express = require("express");
const router = express.Router();
const SellerController = require("../Controllers/SellerControllers");
const multer = require("multer");
const {v4:uuidv4} = require("uuid");
const { extname } = require("path");

const imageStorage = multer.diskStorage({
    destination: 'Public/Images',
    filename: (req,file,cb) => {
        cb(null, file.fieldname + uuidv4() + Date.now() + extname(file.originalname))
    }
});

const upload = multer({
    storage: imageStorage,
    fileFilter(req,file,cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
});

router.post("/register", SellerController.postSellerRegister);
router.post("/addproduct", upload.single('Image'), SellerController.addProductData);

module.exports = router;