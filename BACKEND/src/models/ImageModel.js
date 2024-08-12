const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductModel = require('./ProductModel');

const ImageModel = connection.define("Image", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    pacth: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
    
});

module.exports = ImageModel;