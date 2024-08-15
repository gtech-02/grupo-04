const CategoryModel = require('../models/CategoryModel')
const jwt = require('jsonwebtoken');

const CategoryController = {

    create(request, response) {
        CategoryModel.create(request.body);

        response.status(201);
        response.json({
            message: "Categoria criada com sucesso"
        });
    },

    async list(request, response) {
            const category = await CategoryModel.findAll();
            response.json(category);
    },

    async update(request, response) {
        let id = request.params.id;
        
        CategoryModel.update(request.body, {
            where: { id } // id: id
        });

        return response.json({
            message: "Categoria atualizada com sucesso"
        });
    },
    async delete (request, response) {
        let id = request.params.id;
        CategoryModel.destroy({
            where: { id }
        });

        return response.json({
            message: "Categoria deletada com sucesso"
        })
    }

}
module.exports = CategoryController;