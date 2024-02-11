const User = require('../models/User');
const { validateEmail, validateLenght } = require('../helpers/validation');
var bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

exports.register = async (req, res) => {
    try {
    const {
        name,
        email,
        cpf,
        password
    } = req.body;

    if(!validateEmail(email)) {
        return res.status(400).json({
            message: "Invalid email address",
        });
    }

    const check = await User.findOne({ email });
    if(check) {
        return res.status(400).json({
            message: "This emails address already exists, try with a different email address",
        });
    }

    if(!validateLenght(name, 3, 30)) {
        return res.status(400).json({
            message: "First name must between 3 and 30 characters"
        });
    }

    if(!validateLenght(password, 6, 30)) {
        return res.status(400).json({
            message: "Password must be atleast 6 characters"
        });
    }

    const user = await new User({
        name,
        email,
        cpf,
        password: bcrypt.hashSync(password, salt),
    }).save();
    res.json({
        success: true,
        user: user
    });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};    