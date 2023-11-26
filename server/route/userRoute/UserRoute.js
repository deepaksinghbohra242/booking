const express = require('express');
const {
    userRegisterCtrl,
    userLoginCtrl,
    fetchUserProfile
} = require('../../controller/userCtrl/UserCtrl');


const userRoutes = express.Router();

userRoutes.post('/register' , userRegisterCtrl);
userRoutes.post('/login', userLoginCtrl);
userRoutes.get('/profile' , fetchUserProfile);

module.exports = userRoutes;