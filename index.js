const express = require('express');
const mongoDbUrl = require('./src/configs/database.config.js');
const mongoose = require('mongoose');
const categoryRouter = require('./src/routes/category.routes.js');
const userRouter = require('./src/routes/userRoute.js');

const app = express();

// parse json object
app.use(express.json());

mongoose.connect(mongoDbUrl.url, {useNewUrlParser: true});
const con = mongoose.connection;


app.use('/category', categoryRouter);
app.use('/user', userRouter);


const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});