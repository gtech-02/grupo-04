const CategoryCreateValidation = async (request, response, next) => {

    let messageReturn = ''
    
    if (!request.body.name || !request.body.slug){
        messageReturn = 'name, slug são obrigatórios!'
        return response.status(400).json({
            message: messageReturn
        })
    } 

    next();
} 

module.exports = CategoryCreateValidation;