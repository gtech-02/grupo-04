const ProductModel = require('../models/ProductModel');
const jwt = require('jsonwebtoken');

const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);

        response.status(201);
        response.json({
            message: "Produto criado com sucesso"
        });
    },

    async list(request, response) {
        const products = await ProductModel.findAll();
        response.status(200);
        response.json(products);
    },

    async update(request, response) {
        let id = request.params.id;
        
        ProductModel.update(request.body, {
            where: { id } // id: id
        });

        return response.json({
            message: "Produto atualizado com sucesso"
        });
    },
    async delete (request, response) {
        let id = request.params.id;
        ProductModel.destroy({
            where: { id }
        });

        return response.json({
            message: "Usuario deletado com sucesso"
        })
    }
}

module.exports = ProductController;