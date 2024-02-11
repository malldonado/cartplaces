const Seller = require('../models/Seller');

exports.seller = async (req, res) => {
    try {
    const {
        nameSeller,
        cpfSeller
    } = req.body;

    const sellers = await new Seller({
        nameSeller,
        cpfSeller
    }).save();
    res.json({
        success: true,
        user: sellers
    });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};  