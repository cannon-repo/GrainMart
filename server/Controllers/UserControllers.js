const bcrypt = require("bcryptjs");
const User = require("../Models/User");
const UserData = require("../Models/UserData");
const jwt = require("jsonwebtoken");

module.exports.postRegister = async (req, res) => {
    const { Name, UserId, Pwd } = req.body;
    try {
        const userExist = await User.findOne({ UserId });
        if (userExist) {
            return res.status(400).json({success: false, msg: 'User already exists'});
        }
        const salt = await bcrypt.genSalt();
        const newPwd = await bcrypt.hash(Pwd, salt);
        await User.create({ Name, UserId, Pwd: newPwd });
        await UserData.create({UserId});
        res.status(200).json({success: true, msg: 'User registered successfully'});
    } catch (err) {
        res.status(400).json({success: false, msg:'Error from postRegister'});
    }
}

module.exports.postLogin = async (req, res) => {
    const { UserId, Pwd } = req.body;
    try {
        const userExist = await User.findOne({ UserId });
        if (!userExist) {
            return res.status(400).json({success: false, msg:'Please register first'});
        }
        const isMatch = await bcrypt.compare(Pwd, userExist.Pwd);

        if (isMatch) {
            const token = jwt.sign({ id: userExist._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 * 3 });
            res.cookie('jwt', token, { maxAge: 1000 * 60 * 60 * 24 * 3 });
            return res.status(200).json({success: true, msg:'Login success'});
        } else {
            return res.status(400).json({success: false, msg:'Wrong Credentials'});
        }
    } catch (err) {
        return res.status(400).json({success: false, msg: 'Error from postLogin', error: err });
    }
}

module.exports.getLogout = (req, res) => {
    console.log('reached logout');
    const token = req.cookies.jwt;
    if (token) {
        res.cookie('jwt', '', { maxAge: 0 });
        return res.status(200).json({success: true, meg: 'Logout Success'});
    } else {
        return res.status(400).json({success: false, msg: 'Please Login First'});
    }
}

module.exports.authUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(400).json({success: false, msg: 'User not found'});
            }
            const user = await User.findById(decoded.id);
            if (user) {
                next();
            } else {
                return res.status(400).json({success: false, msg:'User Not found'});
            }
        })
    } else {
        return res.json({success: false, msg:'User Not Found'});
    }
}

module.exports.getLoggedUser = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(400).json({success: false, msg: 'User not found'});
            }
            const user = await User.findById(decoded.id);
            if (user) {
                return res.status(200).json({success: true, msg: user});
            } else {
                return res.status(400).json({success: false, msg:'User Not found'});
            }
        })
    } else {
        return res.json({success: false, msg: 'User Not Found'});
    }
}

module.exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({success: true, users: allUsers });
    } catch (err) {
        res.status(400).json({success: false, error: err});
    }
}