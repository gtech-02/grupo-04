const UserModel = require('../models/UserModel');

const validationMessages = {
    emailExists: 'Esse email já está cadastrado!',
    weakPassword: 'A senha deve conter pelo menos uma letra maiúscula, um símbolo e ter no mínimo 8 caracteres!',
    invalidEmail: 'Digite um e-mail válido!',
    invalidFirstname: 'Digite apenas o primeiro nome, sem espaços!',
    invalidName: 'Não é aceito números no nome!'
};

// Função de validação para a atualização do usuário
const UserUpdateValidation = async (request, response, next) => {
    const { firstname, surname, email, password } = request.body;

    // Verifica se o firstname contém espaços
    if (firstname && /\s/.test(firstname)) {
        return response.status(400).json({
            message: validationMessages.invalidFirstname
        });
    }

    // Verifica se o firstname e o surname contêm números
    const hasNumbers = /\d/;
    if ((firstname && hasNumbers.test(firstname)) || (surname && hasNumbers.test(surname))) {
        return response.status(400).json({
            message: validationMessages.invalidName
        });
    }

    // Se a senha for fornecida, valida a força da senha
    if (password) {
        const passwordCondition = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (!passwordCondition.test(password)) {
            return response.status(400).json({
                message: validationMessages.weakPassword
            });
        }
    }

    // Se o email for fornecido, valida o formato do e-mail
    if (email) {
        const emailCondition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailCondition.test(email)) {
            return response.status(400).json({
                message: validationMessages.invalidEmail
            });
        }

        // Verifica se o email já está cadastrado (exceto para o próprio usuário que está sendo atualizado)
        const existingUser = await UserModel.findOne({
            where: { email }
        });

        if (existingUser && existingUser.id != request.params.id) {
            return response.status(400).json({
                message: validationMessages.emailExists
            });
        }
    }

    next();
};

module.exports = UserUpdateValidation;