const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();

app.use(express.json());

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const CategoryController  = require('./controllers/CategoryController');
const UserCreateValidation = require("./middleware/UserCreateValidation"); 
const JwtVerifyToken = require("./middleware/JwtVerifyToken");
const ProductCreateValidation = require("./middleware/ProductCreateValidation");
const CategoryCreateValidation = require("./middleware/CategoryCreateValidation");

const PrivateRoutes = express.Router();

PrivateRoutes.use(JwtVerifyToken);

app.get('/products', ProductController.list);
PrivateRoutes.post('/products', ProductCreateValidation ,ProductController.create);
PrivateRoutes.put('/products/:id', ProductController.update);
PrivateRoutes.delete('/products/:id', ProductController.update);



app.get('/users', UserController.list);
PrivateRoutes.post('/users', UserCreateValidation, UserController.create);
app.post('/login', UserController.login);
PrivateRoutes.put('/users/:id', UserController.update);
PrivateRoutes.delete('/users/:id', UserController.delete);


app.get('/category', CategoryController.list);
PrivateRoutes.post('/category', CategoryCreateValidation, CategoryController.create);


app.use(PrivateRoutes);

app.listen(3000);













// const UserController = require('./controllers/UserController');

// const request = {
//     body: {
//         firstname: "Joaquim",
//         surname: "Silva",
//         email: "joaqui@mail.com",
//         password: "1234",
//     }
// }

// UserController.create(request);
// UserController.list();



// const ProductController = require('./controllers/ProductController');

// const request = {
//     body: {
//         name: "Motorola",
//         price: 19.58,
//         description: "Descrição do produto"
//     }
// }

// // ProductController.create(request);
// ProductController.list();