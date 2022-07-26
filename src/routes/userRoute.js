const express = require('express');
const userController  = require('../controllers/userController');
const  router = express.Router();

router.post('/', userController.register);
router.post('/login',userController.login);
router.get('/:id', userController.profile);
router.get('/', userController.login_required);

module.exports = router;