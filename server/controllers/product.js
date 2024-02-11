const productSeller = require('../models/Product');

exports.productSellers = async (req, res) => {
    try {
    const {
        nameProduct,
        valueProduct,
        discountProduct,
        imageProduct
    } = req.body;

    const products = await new productSeller({
        nameProduct,
        valueProduct,
        discountProduct,
        imageProduct
    }).save();
    res.json({
        success: true,
        user: products
    });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};