const User = require('../../models/User');
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