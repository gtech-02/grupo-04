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
        const category = await CategoryModel.findAll(
        //     {
        //     // atributo de retorno das colunas 
        //     // attributes: []
        // }
    );
        response.json(category);
    }


}
module.exports = CategoryController;