const express = require('express');
const mongoDbUrl = require('./src/configs/database.config.js');
const mongoose = require('mongoose');
const categoryRouter = require('./src/routes/category.routes.js');
const userRouter = require('./src/routes/userRoute.js');
const itemRouter = require("./src/routes/itemRoutes.js");
const shoppingListRouter = require("./src/routes/shoppingListRoute");
const cors = require("cors");
const authMiddleware = require("./src/middlewares/authJwt");
const app = express();

let corsOptions = {
    origin: "*"
};

app.use(authMiddleware.verifyToken);

app.use(cors(corsOptions));
// parse json object
app.use(express.json());

mongoose.connect(mongoDbUrl.url, {useNewUrlParser: true});
const con = mongoose.connection;

app.use('/category', categoryRouter);
app.use('/user', userRouter);
app.use('/items', itemRouter);
app.use('/shopping-list', shoppingListRouter);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
