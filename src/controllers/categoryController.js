const categoryService = require('../services/category.js');

exports.createCategory = (req, res) => {
    res.send(categoryService.create({hello: 'this works'}));
}

