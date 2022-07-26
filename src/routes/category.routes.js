const express = require('express');
const categoryController  = require('../controllers/categoryController.js');
const  router = express.Router();

router.post('/', categoryController.createCategory);
router.get('/',categoryController.getAllCategories);
router.get('/:id', categoryController.getCategory);

module.exports = router;