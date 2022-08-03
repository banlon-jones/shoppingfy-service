const express = require('express');
const shoppingListController  = require('../controllers/shoppingListController');
const router = express.Router();

router.post('/', shoppingListController.createShoppingList);
router.get('/', shoppingListController.getAllShoppingList);
router.get('/:id', shoppingListController.getShoppingList);
router.put('/status/:id', shoppingListController.updateStatusShoppingList);
router.put('/:id', shoppingListController.updateShoppingList);
router.delete('/:id', shoppingListController.deleteShoppingList);

module.exports = router;
