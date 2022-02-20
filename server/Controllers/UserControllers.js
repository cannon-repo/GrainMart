const bcrypt = require("bcryptjs");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

module.exports.postRegister = async (req, res) => {
    const { Name, UserId, Pwd } = req.body;
    try {
        const userExist = await User.findOne({ UserId });
        if (userExist) {
            return res.status(400).json('User already exists');
        }
        const salt = await bcrypt.genSalt();
        const newPwd = await bcrypt.hash(Pwd, salt);
        await User.create({ Name, UserId, Pwd: newPwd });
        res.json('User registered successfully');
    } catch (err) {
        res.status(400).json('Error from postRegister');

    }
}

module.exports.postLogin = async (req, res) => {
    const { UserId, Pwd } = req.body;
    try {
        const userExist = await User.findOne({ UserId });
        if (!userExist) {
            return res.status(400).json('Please register first');
        }
        const isMatch = await bcrypt.compare(Pwd, userExist.Pwd);

        if (isMatch) {
            const token = jwt.sign({ id: userExist._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 * 3 });
            res.cookie('jwt', token, { maxAge: 1000 * 60 * 60 * 24 * 3 });
            return res.status(200).json('Login success');
        } else {
            return res.status(400).json('Wrong Credentials');
        }
    } catch (err) {
        return res.status(400).json({ message: 'Error from postLogin', err });
    }
}

module.exports.getLogout = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        res.cookie('jwt', '', { maxAge: 0 });
        return res.status(200).json('Logout Success');
    } else {
        return res.status(400).json('Please Login First');
    }
}

module.exports.authUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(400).json('User not found');
            }
            const user = await User.findById(decoded.id);
            if (user) {
                next();
            } else {
                return res.status(400).json('User Not found');
            }
        })
    } else {
        return res.json('User Not Found');
    }
}

module.exports.getLoggedUser = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(400).json('User not found');
            }
            const user = await User.findById(decoded.id);
            if (user) {
                return res.status(200).json(user.UserId);
            } else {
                return res.status(400).json('User Not found');
            }
        })
    } else {
        return res.json('User Not Found');
    }
}

module.exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({ users: allUsers });
    } catch (err) {
        res.status(400).json(err);
    }
}