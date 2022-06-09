const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser);


router
    .route('/:id')
    .put(userController.updateUser)
    .delete(userController.deleteUser);
router
    .route('/username')
    .post(userController.getUsername);
    
router
    .route('/newpass')
    .put(userController.updateUserPass);
        
router
    .route('/login')
    .post(userController.getOneUser);

router
    .route('/email')
    .post(userController.getEmail)
module.exports = router;

