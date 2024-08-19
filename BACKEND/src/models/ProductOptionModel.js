const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductModel = require('./ProductModel');

const ProductOptionModel = connection.define("ProductOption", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    shape: {
        type: DataTypes.ENUM('square', 'circle'),
        allowNull: true,
        defaultValue: 'square'
    },
    radius: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM('text', 'color'),
        allowNull: true,
        defaultValue: 'text'
    },
    values: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    // Configurações adicionais
    timestamps: false, // Desativa os campos createdAt e updatedAt
    tableName: 'product_options' // Nome da tabela no banco de dados
});

module.exports = ProductOptionModel;
