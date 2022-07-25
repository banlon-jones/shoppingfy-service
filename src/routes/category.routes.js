const express = require('express');
const categoryController  = require('../controllers/categoryController.js');
const  router = express.Router();

router.get('/', categoryController.createCategory);

module.exports = router;