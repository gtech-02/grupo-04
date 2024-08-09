const connection = require('./connection');

require('../models/UserModel');
require('../models/CategoryModel');
require('../models/ProductModel');

connection.sync({force: true});

