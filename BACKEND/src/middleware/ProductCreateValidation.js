const ProductModel = require("../models/ProductModel");

const ProductCreateValidation = async (request, response, next) => {

    let messageReturn = ''
    
    if (!request.body.user_id || !request.body.name || !request.body.slug || !request.body.price){
        messageReturn = 'user_id, name, slug e price são obrigatórios!'
        return response.status(400).json({
            message: messageReturn
        })
    } 

    next();
} 

module.exports = ProductCreateValidation;