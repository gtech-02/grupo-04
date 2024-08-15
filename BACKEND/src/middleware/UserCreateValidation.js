const UserModel = require("../models/UserModel");

const UserCreateValidation = async (request, response, next) => {

    let messageReturn = '';


    const { firstname, surname, email, password } = request.body;
    
    // Verifica se todos os campos obrigatórios estão presentes
    if (!firstname || !surname || !email || !password) {
        messageReturn = 'firstname, surname, email e password são obrigatórios!';
        return response.status(400).json({
            message: messageReturn
        });
    }

    // Verifica se o email já está cadastrado
    const emailReq = await UserModel.findOne({
        where: { email }
    });

    if (emailReq && emailReq.dataValues.id > 0) {
        messageReturn = 'Esse email já está cadastrado!';
        return response.status(400).json({
            message: messageReturn
        });
    }

    
    const conditionForPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!conditionForPassword.test(password)) {
        messageReturn = 'A senha deve conter pelo menos uma letra maiúscula, um símbolo e ter no mínimo 8 caracteres!';
        return response.status(400).json({
            message: messageReturn
        });
    }

    next();
};

module.exports = UserCreateValidation;
