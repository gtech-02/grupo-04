const ProductModel = require('../models/ProductModel');
const ImageModel = require('../models/ImageModel');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const ProductOptionModel = require('../models/ProductOptionModel');

const ProductController = {
    async create(request, response) {
        let product = await ProductModel.create(request.body);

        if(request.body?.images) {
            // Inserindo ID do produto no objeto com os dados da imagem
            let images = request.body.images.map(image => {
                return {
                    product_id: product.id,
                    path: image.content,
                    ...image
                }
            })
            
            // Salvando uma lista de imagens de uma so vez
            await ImageModel.bulkCreate(images)
        }

        if(request.body?.options) {
            
            let options = request.body.options.map(options => {
                return {
                    product_id: product.id,
                    title: options.title,
                    shape: options.shape,
                    radius: options.radius,
                    type: options.type,
                    values: options.values,
                    ...options
                }
            })
            
          
            await ProductOptionModel.bulkCreate(options)
        }

        return response.json({
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