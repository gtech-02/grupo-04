const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

let CategoryModel = connection.define("Category", {
    name: {
        type: DataTypes.STRING(50), // VARCHAR(50)
        allowNull: false // NOT NULL
    }, 
    slug: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = CategoryModel;