const User = require('../models/User');
const { validateEmail, validateLenght } = require('../helpers/validation');
var bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const jwtSecret = 'nwOB7nDEYpeEfdGot29ZZnsP6nL4qi';

exports.register = async (req, res) => {
    try {
    const {
        email,
        password,
        terms
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

    // if(!validateLenght(name, 3, 30)) {
    //     return res.status(400).json({
    //         message: "First name must between 3 and 30 characters"
    //     });
    // }

    if(!validateLenght(password, 6, 30)) {
        return res.status(400).json({
            message: "Password must be atleast 6 characters"
        });
    }

    const user = await new User({
        email,
        password: bcrypt.hashSync(password, salt),
        terms
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

exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const userDoc = await User.findOne({email})

        if(userDoc) {
            const passOK = bcrypt.compareSync(password, userDoc.password)
            if(passOK) {
              jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json('pass Ok');
              });
            } else {
              res.status(422).json('pass not ok')
            }
          } else {
            res.json('Not found')
          }
    }catch(e) {

    }
}