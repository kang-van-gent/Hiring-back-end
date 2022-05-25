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
    .post(userController.getUser);
    
router
    .route('/newpass')
    .put(userController.updateUserPass);
        
router
    .route('/getone')
    .post(userController.getOneUser)
module.exports = router;

