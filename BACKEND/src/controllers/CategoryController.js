const CategoryModel = require('../models/CategoryModel')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const CategoryController = {

    create(request, response) {
        CategoryModel.create(request.body);
        response.json({
            message: "Categoria criada com sucesso"
        });
    },

    async list(request, response) {
        const category = await CategoryModel.findAll();
        response.json(category);
    }
}
module.exports = CategoryController;