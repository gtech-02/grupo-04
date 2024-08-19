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

    if (/\s/.test(firstname)) {
        return response.status(400).json({
            message: 'Digite apenas o primeiro nome, sem espaços!'
        });
    }

    const hasNumbers = /\d/;

    if (hasNumbers.test(firstname) || hasNumbers.test(surname)) {
        return response.status(400).json({
            message: 'Não é aceito números no nome!'
        });
    }
    
    const conditionForEmail = /^[^\s@]{4,}@([^\s@]+)\.com$/;

    if (!conditionForEmail.test(email)) {
        messageReturn = 'Digite um e-mail válido!'
        return response.status(400).json({
            message: messageReturn
        });
    }

    next();
};

module.exports = UserCreateValidation;
