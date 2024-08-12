const ProductModel = require('../models/ProductModel');
const jwt = require('jsonwebtoken');

const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);
        response.json({
            message: "Produto criado com sucesso"
        });
    },

    async list(request, response) {
        const products = await ProductModel.findAll();
        response.json(products);
    }
}

module.exports = ProductController;