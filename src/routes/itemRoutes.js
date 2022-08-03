const express = require('express');
const itemController  = require('../controllers/itemController');
const router = express.Router();

router.post('/', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;