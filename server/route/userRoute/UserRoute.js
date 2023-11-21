const express = require('express');
const {
    test ,
    userRegisterCtrl,
    userLoginCtrl
} = require('../../controller/userCtrl/UserCtrl');


const userRoutes = express.Router();

userRoutes.get('/test' , test);
userRoutes.post('/register' , userRegisterCtrl);
userRoutes.post('/login', userLoginCtrl);

module.exports = userRoutes;