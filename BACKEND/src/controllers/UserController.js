const UserModel = require('../models/UserModel');
const ProductModel = require('../models/ProductModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const UserController = {
    async create(request, response) {
        
        let hash = await bcrypt.hash(request.body.password, 10);
        request.body.password = hash;

        UserModel.create(request.body);
        messageReturn = 'Usuario criado com sucesso!'

        response.status(201);
        return response.json({
            message: messageReturn
        });
    },

    async login(request, response) {
        let email = request.body.email;
        let password = request.body.password
        let messageCompare = ''

        // Controle para tornar email e senha obrigatórios
        if (!email || !password){
            messageCompare = 'email e password são obrigatórios!'
        } else {
            // Buscando usuário com o email passado pelo body
            let user = await UserModel.findOne({
                where: { email }
            });
            
            let userPassword = user ? user.password : ''
            let hasValid = await bcrypt.compare(password, userPassword);
            // Lógica para criação do token válido por 8h
            const expiresIn = '8h'
            const token = hasValid ? jwt.sign({
                id: user.id, name: user.firstname, email: user.email}, process.env.JWT_SECRET, {
                    expiresIn
                }) : 'Usuário ou senha inválido!'
            
            messageCompare = token
        }

        response.json({
            message: messageCompare
        })
    },

    async list(request, response) {

        //retorno de produtos dentro dos usuários
        try {
            const users = await UserModel.findAll({
                attributes: { exclude: ['password', "createdAt", "updatedAt", "email"] } 
            });

            let result = await Promise.all(users.map(async (user) => {
                let products = await ProductModel.findAll({ where: { user_id: user.id } });
                return {
                    ...user.dataValues,
                    products: products
                };
            }));

            return response.json(result);

        } catch (error) {
            return response.status(500).json({
                message: 'Erro ao listar usuários.',
                error: error.message
            });
        }
    },

    async update(request, response) {
        let id = request.params.id;
        
        UserModel.update(request.body, {
            where: { id } // id: id
        });

        return response.json({
            message: "Usuario atualizado com sucesso"
        });
    },


    async delete (request, response) {
        let id = request.params.id;
        UserModel.destroy({
            where: { id }
        });

        return response.json({
            message: "Usuario deletado com sucesso"
        })
    }
}

module.exports = UserController;