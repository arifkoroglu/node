const express = require('express')
const router = express.Router()
const PageController = require('../controllers/PageController');
const UserController = require('../controllers/UserController');

router.get('/', PageController.index);
router.get('/users',UserController.index);
router.get('/user/create',UserController.store);
router.get('/user/:user_id',UserController.show);

module.exports = router