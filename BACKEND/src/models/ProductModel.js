const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const UserModel = require('./UserModel');

const ProductModel = connection.define("Product", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: DataTypes.TEXT,
    slug:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    use_in_menu:{
        type: DataTypes.BOOLEAN(255),
        defaultValue: 0
    },
    price: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    price_with_discount: DataTypes.DECIMAL(5,2),
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = ProductModel;